
const { test, expect } = require('@jest/globals')
const analyze=require('./array_analisis')
test('simple 3',()=>{
 expect(analyze([1,2,3])).toEqual({average:2, min:1, max:3, length:3})
});
test('tough  array',()=>{
    expect(analyze([1,8,3,4,2,6])).toEqual({average: 4, min: 1,
        max: 8,
        length: 6})
});
test(' works with strings', ()=>{
    expect(analyze(["1","8","3","4","2","6"])).toEqual({average: 4, min: 1,
        max: 8,
        length: 6})
});



