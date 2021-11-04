
const { test, expect } = require('@jest/globals');
const Calculator=require('./calculator')
test('add (num)', ()=>{
 expect(Calculator(9,"+",8)).toBe(17);
});
test('add (str)', ()=>{
    expect(Calculator("9","+","8")).toBe(17);
});
test('substract (str)', ()=>{
    expect(Calculator("9","-","8")).toBe(1);
});
test('sub (num)', ()=>{
    expect(Calculator(9,"-",8)).toBe(1);
});
//multip
test('multiply (str)', ()=>{
    expect(Calculator("9","*","8")).toBe(72);
});
test('multiply (num)', ()=>{
    expect(Calculator(9,"*",8)).toBe(72);
});
test('div (str)', ()=>{
    expect(Calculator("25","/","5")).toBe(5);
});
test('div (num)', ()=>{
    expect(Calculator(25,"/",5)).toBe(5);
});