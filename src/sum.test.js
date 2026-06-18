import sum from "./sum";
test("testing for sum fun",()=>{
  let a=10;
  let b=20;
  let output=30;
expect(sum(a,b)).toBe(output)
});