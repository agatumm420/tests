
const { test, expect } = require('@jest/globals');
const ceasar=require('./ceasar');
test('simple (word)', ()=>{
    expect(ceasar("bat", 1)).toBe("cbu");
   });
test('long word', ()=>{
    expect(ceasar("defend the east wall of the castle", 1)).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
});
test('wraping from z to a', ()=>{
    expect(ceasar("wxyz", 1)).toBe("xyza");
});
test('punctiuation',()=>{
    expect(ceasar("!?,",2)).toBe("!?,")
});
