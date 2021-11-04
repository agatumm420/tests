const capitalize = require('./capitalize');

test('works with all small', () => {
  expect(capitalize("cat")).toBe("Cat");
});
test('works with long', ()=>{
    expect(capitalize("monochromatic")).toBe("Monochromatic");
});
test('works with wrong cap', ()=>{
    expect(capitalize("gErMaN")).toBe("GErMaN");
});
test('works when its already been caped',()=>{
   expect(capitalize("Yolo")).toBe("Yolo");
});