import {Sort} from "./sort";
describe("Sample test suite", () => {
  test("Test merge 2 sorted array(1)", () => {
    let s = new Sort();
    expect(s.merge([1,3,5,6,8],[2,4,6,7])).toEqual([1,2,3,4,5,6,6,7,8]);  
  });
  test("Test merge 2 sorted array(2)", () => {
    let s = new Sort();
    expect(s.merge([1,3,5,6,8],[6,7])).toEqual([1,3,5,6,6,7,8]);  
  });
});