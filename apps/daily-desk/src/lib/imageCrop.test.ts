import {describe,it,expect} from "vitest";
import {cropPixels,initialCrop,moveCrop,rectFromDrag} from "./imageCrop";
describe("local image crop geometry",()=>{
 it("accepts backwards freeform drags",()=>{
  expect(rectFromDrag(90,80,20,30,100,100,null)).toEqual({x:20,y:30,width:70,height:50});
 });
 it("locks 16:9 and stays inside the image",()=>{
  const rect=rectFromDrag(10,10,190,190,200,200,16/9);
  expect(rect.width/rect.height).toBeCloseTo(16/9);
  expect(rect.x+rect.width).toBeLessThanOrEqual(200);
  expect(rect.y+rect.height).toBeLessThanOrEqual(200);
 });
 it("moves existing selection and clamps at boundaries",()=>{
  const moved=moveCrop({x:30,y:20,width:50,height:40},999,-999,200,100);
  expect(moved).toEqual({x:150,y:0,width:50,height:40});
 });
 it("initializes centered aspect rectangle",()=>{
  const crop=initialCrop(200,100,1);
  expect(crop.width).toBeCloseTo(crop.height);
  expect(crop.x).toBeGreaterThan(0);
 });
 it("rounds to valid integral pixel crop and rejects empty selections",()=>{
  expect(cropPixels({x:2.2,y:3.7,width:22.6,height:17.4},100,100)).toEqual({x:2,y:3,width:22,height:18});
  expect(()=>cropPixels({x:2,y:2,width:0,height:0},100,100)).toThrow(/2×2/);
 });
});