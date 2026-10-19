import {type PointerEvent,useEffect,useRef,useState} from "react";
import {exportFile} from "../lib/output";
import {CROP_ASPECTS,cropPixels,initialCrop,moveCrop,rectFromDrag,type CropRect} from "../lib/imageCrop";

const COLORS=["#ef4444","#2563eb","#16a34a","#f59e0b","#ffffff","#111827"];
type UndoFrame={width:number;height:number;image:ImageData};
type DragState={kind:"new"|"move"|"draw";x:number;y:number;initial:CropRect|null};

export default function ImageAnnotationDesk({file}:{file:File|null}){
 const imageCanvas=useRef<HTMLCanvasElement|null>(null);
 const overlayCanvas=useRef<HTMLCanvasElement|null>(null);
 const history=useRef<UndoFrame[]>([]);
 const drag=useRef<DragState|null>(null);
 const [mode,setMode]=useState<"crop"|"draw">("crop");
 const [aspectId,setAspectId]=useState("free");
 const [crop,setCrop]=useState<CropRect|null>(null);
 const [color,setColor]=useState(COLORS[0]);
 const [penWidth,setPenWidth]=useState(4);
 const [ready,setReady]=useState(false);
 const [revision,setRevision]=useState(0);
 const [undoCount,setUndoCount]=useState(0);
 const [status,setStatus]=useState("");
 const [busy,setBusy]=useState(false);
 const ratio=CROP_ASPECTS.find(item=>item.id===aspectId)?.ratio??null;

 useEffect(()=>{
  let alive=true;
  const canvas=imageCanvas.current;
  setReady(false);setCrop(null);setStatus("");
  history.current=[];setUndoCount(0);drag.current=null;setMode("crop");
  if(!file||!canvas)return;
  if(!/^image\/(jpeg|png|webp)$/u.test(file.type)){setStatus("Choose a JPEG, PNG or WebP image.");return;}
  if(file.size>8_000_000){setStatus("Image Studio accepts files up to 8 MB.");return;}
  const url=URL.createObjectURL(file);
  const image=new Image();
  image.onload=()=>{
    if(!alive)return;
    if(!image.naturalWidth||!image.naturalHeight||image.naturalWidth*image.naturalHeight>32_000_000){
      setStatus("Image dimensions unavailable or exceed 32 megapixels.");return;
    }
    const scale=Math.min(1,1400/image.naturalWidth,1400/image.naturalHeight);
    canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));
    canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
    const ctx=canvas.getContext("2d");
    if(!ctx){setStatus("Canvas unavailable.");return;}
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(image,0,0,canvas.width,canvas.height);
    setCrop(initialCrop(canvas.width,canvas.height,null));
    setReady(true);
  };
  image.onerror=()=>{if(alive)setStatus("Could not decode the image.");};
  image.src=url;
  return()=>{alive=false;URL.revokeObjectURL(url);};
 },[file,revision]);

 useEffect(()=>{
  const source=imageCanvas.current,overlay=overlayCanvas.current;
  if(!overlay||!source)return;
  overlay.width=source.width;overlay.height=source.height;
  const ctx=overlay.getContext("2d");
  if(!ctx)return;
  ctx.clearRect(0,0,overlay.width,overlay.height);
  if(!ready||mode!=="crop"||!crop||crop.width<1||crop.height<1)return;
  ctx.fillStyle="rgba(15,23,42,0.35)";
  ctx.fillRect(0,0,overlay.width,overlay.height);
  ctx.clearRect(crop.x,crop.y,crop.width,crop.height);
  ctx.strokeStyle="#2563eb";ctx.lineWidth=Math.max(2,overlay.width/450);
  ctx.strokeRect(crop.x,crop.y,crop.width,crop.height);
 },[ready,crop,mode]);

 function remember(){
  const canvas=imageCanvas.current,ctx=canvas?.getContext("2d");
  if(!canvas||!ctx)return;
  history.current.push({width:canvas.width,height:canvas.height,image:ctx.getImageData(0,0,canvas.width,canvas.height)});
  if(history.current.length>6)history.current.shift();
  setUndoCount(history.current.length);
 }
 function undo(){
  const frame=history.current.pop(),canvas=imageCanvas.current;
  if(!frame||!canvas)return;
  canvas.width=frame.width;canvas.height=frame.height;
  canvas.getContext("2d")?.putImageData(frame.image,0,0);
  setCrop(null);setMode("draw");setUndoCount(history.current.length);
  setStatus("Undid the last edit.");
 }
 function point(event:PointerEvent<HTMLCanvasElement>){
  const rect=event.currentTarget.getBoundingClientRect();
  return {x:(event.clientX-rect.left)*event.currentTarget.width/Math.max(1,rect.width),
    y:(event.clientY-rect.top)*event.currentTarget.height/Math.max(1,rect.height)};
 }
 function pointerDown(event:PointerEvent<HTMLCanvasElement>){
  const canvas=imageCanvas.current;
  if(!canvas||!ready)return;
  const p=point(event);
  if(mode==="draw"){
    const ctx=canvas.getContext("2d");if(!ctx)return;
    remember();
    ctx.beginPath();ctx.moveTo(p.x,p.y);
    ctx.lineWidth=penWidth;ctx.lineCap="round";ctx.lineJoin="round";ctx.strokeStyle=color;
    ctx.lineTo(p.x+.01,p.y+.01);ctx.stroke();
    drag.current={kind:"draw",x:p.x,y:p.y,initial:null};
  }else{
    const inside=crop&&p.x>=crop.x&&p.x<=crop.x+crop.width&&p.y>=crop.y&&p.y<=crop.y+crop.height;
    drag.current={kind:inside?"move":"new",x:p.x,y:p.y,initial:crop};
    if(!inside)setCrop(null);
  }
  event.currentTarget.setPointerCapture(event.pointerId);
 }
 function pointerMove(event:PointerEvent<HTMLCanvasElement>){
  const action=drag.current,canvas=imageCanvas.current;
  if(!ready||!action||!canvas)return;
  const p=point(event);
  if(action.kind==="draw"){
    const ctx=canvas.getContext("2d");if(!ctx)return;
    ctx.lineTo(p.x,p.y);ctx.stroke();
  }else if(action.kind==="move"&&action.initial){
    setCrop(moveCrop(action.initial,p.x-action.x,p.y-action.y,canvas.width,canvas.height));
  }else if(action.kind==="new"){
    setCrop(rectFromDrag(action.x,action.y,p.x,p.y,canvas.width,canvas.height,ratio));
  }
 }
 function pointerUp(event:PointerEvent<HTMLCanvasElement>){
  drag.current=null;
  if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);
 }
 function changeAspect(id:string){
  setAspectId(id);
  const canvas=imageCanvas.current;
  if(canvas&&ready)setCrop(initialCrop(canvas.width,canvas.height,CROP_ASPECTS.find(a=>a.id===id)?.ratio??null));
 }
 function applyCrop(){
  const canvas=imageCanvas.current;
  if(!canvas||!crop||!ready)return;
  try{
    const region=cropPixels(crop,canvas.width,canvas.height);
    const temp=document.createElement("canvas");
    temp.width=region.width;temp.height=region.height;
    temp.getContext("2d")?.drawImage(canvas,region.x,region.y,region.width,region.height,0,0,region.width,region.height);
    remember();
    canvas.width=region.width;canvas.height=region.height;
    canvas.getContext("2d")?.drawImage(temp,0,0);
    setCrop(null);setMode("draw");
    setStatus("Crop applied: "+region.width+" × "+region.height+" pixels. Original file untouched.");
  }catch(error){setStatus("Crop failed: "+String(error));}
 }
 function rotate(clockwise:boolean){
  const canvas=imageCanvas.current;
  if(!canvas||!ready)return;
  const temp=document.createElement("canvas");
  temp.width=canvas.height;temp.height=canvas.width;
  const ctx=temp.getContext("2d");if(!ctx)return;
  if(clockwise){ctx.translate(temp.width,0);ctx.rotate(Math.PI/2);}
  else{ctx.translate(0,temp.height);ctx.rotate(-Math.PI/2);}
  ctx.drawImage(canvas,0,0);
  remember();
  canvas.width=temp.width;canvas.height=temp.height;
  canvas.getContext("2d")?.drawImage(temp,0,0);
  setCrop(null);setMode("draw");setStatus(clockwise?"Rotated 90° clockwise.":"Rotated 90° counterclockwise.");
 }
 async function save(){
  const canvas=imageCanvas.current;if(!canvas||!ready)return;
  setBusy(true);
  try{
    const blob=await new Promise<Blob>((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error("PNG encoding failed")),"image/png"));
    const name=file?.name.replace(/\.[^.]+$/u,"").replace(/[^\p{L}\p{N}._-]/gu,"-").slice(0,60)||"image";
    const saved=await exportFile(name+"-edited.png",new Uint8Array(await blob.arrayBuffer()));
    setStatus(saved?"Saved edited PNG locally. The original image is unchanged.":"Save cancelled.");
  }catch(error){setStatus("Save failed: "+String(error));}
  finally{setBusy(false);}
 }
 return <section className="panel">
  <h3>Interactive crop, rotate & annotate · 交互图片编辑</h3>
  <p className="subtle">Drag a new crop rectangle, drag inside it to move, or draw freehand. Click Apply crop to actually trim the image; Save exports a new PNG. Rotation and edits can be undone.</p>
  {!file&&<p className="subtle">Choose an image above to begin.</p>}
  <div className="pill-row" role="group" aria-label="Image editing mode">
    <button type="button" className={mode==="crop"?"pill active-pill":"pill"} onClick={()=>{setMode("crop");const canvas=imageCanvas.current;if(canvas&&ready&&!crop)setCrop(initialCrop(canvas.width,canvas.height,ratio));}}>Crop selection</button>
    <button type="button" className={mode==="draw"?"pill active-pill":"pill"} onClick={()=>setMode("draw")}>Draw / pen</button>
  </div>
  <div className="actions">
    {mode==="crop"&&<>
      <label className="field-label">Crop aspect ratio
        <select className="field" value={aspectId} onChange={e=>changeAspect(e.target.value)}>
          {CROP_ASPECTS.map(item=><option key={item.id} value={item.id}>{item.label}</option>)}
        </select>
      </label>
      <button type="button" className="secondary-button" disabled={!ready} onClick={()=>setCrop(null)}>New drag selection</button>
      <button type="button" className="primary-button" disabled={!ready||!crop} onClick={applyCrop}>Apply crop</button>
    </>}
    {mode==="draw"&&<>
      <label className="field-label">Pen color
        <select className="field" value={color} onChange={e=>setColor(e.target.value)}>
          {COLORS.map(c=><option key={c} value={c}>{c}</option>)}
        </select>
      </label>
      <label className="field-label">Pen size · {penWidth}px
        <input className="field" type="range" min={1} max={24} value={penWidth} onChange={e=>setPenWidth(Number(e.target.value))}/>
      </label>
    </>}
    <button type="button" className="secondary-button" disabled={!ready} onClick={()=>rotate(false)}>↶ Rotate left</button>
    <button type="button" className="secondary-button" disabled={!ready} onClick={()=>rotate(true)}>↷ Rotate right</button>
    <button type="button" className="secondary-button" disabled={!ready||!undoCount} onClick={undo}>Undo ({undoCount})</button>
    <button type="button" className="secondary-button" disabled={!file} onClick={()=>setRevision(n=>n+1)}>Reset to original</button>
    <button type="button" className="primary-button" disabled={!ready||busy} onClick={()=>{void save();}}>{busy?"Saving…":"Save edited PNG"}</button>
  </div>
  <div style={{position:"relative",width:"100%",maxWidth:720,lineHeight:0}}>
    <canvas ref={imageCanvas} aria-label="Image editing surface" style={{display:"block",width:"100%",height:"auto",background:"#e2e8f0",borderRadius:9}}/>
    <canvas ref={overlayCanvas} onPointerDown={pointerDown} onPointerMove={pointerMove}
      onPointerUp={pointerUp} onPointerCancel={pointerUp} aria-label="Drag crop region or draw on image"
      style={{position:"absolute",left:0,top:0,width:"100%",height:"100%",touchAction:"none",cursor:ready?"crosshair":"default"}}/>
  </div>
  {ready&&<p className="subtle">Working preview: {imageCanvas.current?.width} × {imageCanvas.current?.height}px · max 6 undo frames. Preview is optimized for Mac performance.</p>}
  {status&&<p className="subtle" role="status">{status}</p>}
 </section>;
}