import {describe,it,expect} from "vitest";
import {recommendFileActions,summarizeIntake} from "./fileIntake";
describe("unified intake routing",()=>{
 it("offers CSV tools for mixed CSV inputs",()=>{
  const actions=recommendFileActions([{name:"a.csv",size:1},{name:"b.csv",size:2}]);
  expect(actions.some(a=>a.view==="tables")).toBe(true);
  expect(actions.some(a=>a.module==="zip-pack")).toBe(true);
 });
 it("offers PDF editing for a PDF",()=>expect(recommendFileActions([{name:"a.pdf",size:3}]).some(a=>a.module==="pdf")).toBe(true));
 it("limits file intake metadata",()=>{
  expect(summarizeIntake(Array.from({length:51},()=>({name:"a",size:1}))).overLimit).toBe(true);
  expect(summarizeIntake([{name:"big",size:100000001}]).overLimit).toBe(true);
 });
 it("has no action without files",()=>expect(recommendFileActions([])).toEqual([]));
});
