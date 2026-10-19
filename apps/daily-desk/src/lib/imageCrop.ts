/** Pure, canvas-pixel-coordinate crop geometry for the offline image studio. */
export type CropRect={x:number;y:number;width:number;height:number};
export const CROP_ASPECTS:{id:string;label:string;ratio:number|null}[]=[
 {id:"free",label:"Free",ratio:null},
 {id:"square",label:"1:1",ratio:1},
 {id:"4-3",label:"4:3",ratio:4/3},
 {id:"16-9",label:"16:9",ratio:16/9},
 {id:"3-2",label:"3:2",ratio:3/2},
];
function clamp(n:number,min:number,max:number):number{
 return Math.max(min,Math.min(max,Number.isFinite(n)?n:min));
}
export function rectFromDrag(
 x0:number,y0:number,x1:number,y1:number,canvasWidth:number,canvasHeight:number,ratio:number|null
):CropRect{
 if(canvasWidth<1||canvasHeight<1)throw Error("Invalid canvas dimensions");
 const a=clamp(x0,0,canvasWidth),b=clamp(y0,0,canvasHeight);
 const c=clamp(x1,0,canvasWidth),d=clamp(y1,0,canvasHeight);
 let width=Math.abs(c-a),height=Math.abs(d-b);
 if(ratio!==null){
   if(!Number.isFinite(ratio)||ratio<=0)throw Error("Invalid crop ratio");
   if(width/Math.max(height,1e-9)>ratio)width=height*ratio;
   else height=width/ratio;
 }
 return {
   x:clamp(c>=a?a:a-width,0,canvasWidth),
   y:clamp(d>=b?b:b-height,0,canvasHeight),
   width:Math.max(0,width),
   height:Math.max(0,height),
 };
}
export function moveCrop(rect:CropRect,dx:number,dy:number,width:number,height:number):CropRect{
 return {...rect,x:clamp(rect.x+dx,0,Math.max(0,width-rect.width)),
   y:clamp(rect.y+dy,0,Math.max(0,height-rect.height))};
}
export function initialCrop(width:number,height:number,ratio:number|null):CropRect{
 let w=width*.8,h=height*.8;
 if(ratio!==null){
   if(w/h>ratio)w=h*ratio;else h=w/ratio;
 }
 return {x:(width-w)/2,y:(height-h)/2,width:w,height:h};
}
export function cropPixels(rect:CropRect,width:number,height:number):CropRect{
 const x=clamp(Math.floor(rect.x),0,width),y=clamp(Math.floor(rect.y),0,height);
 const w=clamp(Math.floor(rect.x+rect.width),0,width)-x;
 const h=clamp(Math.floor(rect.y+rect.height),0,height)-y;
 if(w<2||h<2)throw Error("Select a crop region at least 2×2 pixels");
 return {x,y,width:w,height:h};
}
