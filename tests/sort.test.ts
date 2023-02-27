import {Sort} from "./sort";
describe("Sample test suite", () => {
  test("Test merge 2 sorted array", () => {
    let s = new Sort();
    expect(s.merge([1,3,5,6,8],[2,4,6,7])).toEqual([1,2,3,4,5,6,6,7,8]);  
  });
});