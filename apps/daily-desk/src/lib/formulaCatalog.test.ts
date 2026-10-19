import {describe,expect,it} from "vitest";
import {FORMULA_BOARD} from "./formulaCatalog";
describe("complete formula-board parity",()=>{
  it("ports all five website subjects and 32 original formulas",()=>{
    expect(FORMULA_BOARD).toHaveLength(5);
    expect(FORMULA_BOARD.flatMap(section=>section.items)).toHaveLength(32);
  });
  it("keeps unique formula identifiers, LaTeX and plain forms",()=>{
    const items=FORMULA_BOARD.flatMap(s=>s.items);
    expect(new Set(items.map(x=>x.id)).size).toBe(items.length);
    expect(items.every(x=>Boolean(x.latex)&&Boolean(x.plain)&&Boolean(x.name))).toBe(true);
  });
});