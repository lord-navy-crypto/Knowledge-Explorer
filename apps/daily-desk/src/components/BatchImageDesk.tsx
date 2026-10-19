import {useState} from "react";
import JSZip from "jszip";
import {exportFile} from "../lib/output";

type ImageOutput = "image/jpeg"|"image/png"|"image/webp";
function cleanBase(value:string):string {
  return value.replace(/\.[^.]+$/u,"").replace(/[^\p{L}\p{N}._-]+/gu,"-").slice(0,55)||"image";
}
async function convertImage(file:File,format:ImageOutput,maxWidth:number,quality:number):Promise<Blob>{
  const img=new Image();
  const url=URL.createObjectURL(file);
  try {
    await new Promise<void>((resolve,reject)=>{
      img.onload=()=>resolve();
      img.onerror=()=>reject(Error("Cannot decode "+file.name));
      img.src=url;
    });
    if(img.naturalWidth*img.naturalHeight>32_000_000)throw Error("Image exceeds 32 megapixels: "+file.name);
    const scale=Math.min(1,maxWidth/img.naturalWidth);
    const width=Math.max(1,Math.round(img.naturalWidth*scale));
    const height=Math.max(1,Math.round(img.naturalHeight*scale));
    const canvas=document.createElement("canvas");
    canvas.width=width;canvas.height=height;
    const context=canvas.getContext("2d");
    if(!context)throw Error("Canvas unavailable");
    if(format==="image/jpeg"){context.fillStyle="#fff";context.fillRect(0,0,width,height);}
    context.drawImage(img,0,0,width,height);
    const blob=await new Promise<Blob>((resolve,reject)=>canvas.toBlob(result=>result?resolve(result):reject(Error("Encoding failed")),format,quality));
    if(blob.type!==format)throw Error("This WebView cannot encode "+format);
    return blob;
  }finally{URL.revokeObjectURL(url);}
}
export default function BatchImageDesk(){
  const [files,setFiles]=useState<File[]>([]);
  const [format,setFormat]=useState<ImageOutput>("image/jpeg");
  const [width,setWidth]=useState(1600);
  const [quality,setQuality]=useState(.8);
  const [busy,setBusy]=useState(false);
  const [status,setStatus]=useState("");
  async function process(){
    if(!files.length)return;
    setBusy(true);setStatus("");
    try{
      const zip=new JSZip();
      const extension=format==="image/jpeg"?"jpg":format==="image/webp"?"webp":"png";
      let sum=0;
      for(let i=0;i<files.length;i++){
        const file=files[i];
        if(file.size>8_000_000)throw Error("Maximum 8 MB per source image: "+file.name);
        const blob=await convertImage(file,format,width,quality);
        sum+=blob.size;
        if(sum>18_000_000)throw Error("Combined images exceed the 18 MB ZIP processing budget. Use fewer images.");
        zip.file(String(i+1).padStart(2,"0")+"-"+cleanBase(file.name)+"."+extension,await blob.arrayBuffer());
        setStatus("Converted "+(i+1)+" / "+files.length+" images...");
      }
      const archive=await zip.generateAsync({type:"uint8array",compression:"DEFLATE",compressionOptions:{level:3}});
      if(archive.length>20_000_000)throw Error("ZIP exceeds the 20 MB native export limit.");
      const saved=await exportFile("daily-desk-batch-images.zip",archive);
      setStatus(saved?"Saved "+files.length+" converted images in one ZIP. Original images were not modified.":"Save cancelled.");
    }catch(e){setStatus("Batch conversion failed: "+String(e instanceof Error?e.message:e));}
    finally{setBusy(false);}
  }
  return <section className="panel">
    <h3>Batch image converter · ZIP export</h3>
    <p className="subtle">Select up to 12 PNG/JPEG/WebP images, convert them together and save one ZIP locally. Images are never uploaded.</p>
    <label htmlFor="batch-image-files" className="field-label">Choose images (12 maximum, 8 MB each)</label>
    <input id="batch-image-files" type="file" className="field" accept="image/png,image/jpeg,image/webp" multiple
      onChange={event=>{
        const selected=Array.from(event.target.files??[]);
        event.target.value="";
        if(selected.length>12){setStatus("Choose at most 12 images.");return;}
        setFiles(selected);setStatus("");
      }}/>
    {files.length>0&&<p className="subtle">{files.length} image(s) selected: {files.map(f=>f.name).join(", ")}</p>}
    <div className="tools-pair">
      <label className="field-label">Output format<select className="field" value={format} onChange={event=>setFormat(event.target.value as ImageOutput)}>
        <option value="image/jpeg">JPEG</option><option value="image/png">PNG</option><option value="image/webp">WebP</option>
      </select></label>
      <label className="field-label">Maximum width (px)<input type="number" min={64} max={8192} className="field" value={width} onChange={event=>setWidth(Math.max(64,Math.min(8192,Number(event.target.value)||1600)))}/></label>
      <label className="field-label">Quality · {Math.round(quality*100)}%<input type="range" min={.35} max={1} step={.05} value={quality} onChange={event=>setQuality(Number(event.target.value))}/></label>
    </div>
    <button type="button" className="primary-button" disabled={busy||!files.length} onClick={()=>{void process();}}>{busy?"Converting…":"Convert all & save ZIP"}</button>
    {status&&<p role="status" className="subtle">{status}</p>}
  </section>;
}