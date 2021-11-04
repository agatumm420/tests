const reverseString=require('./reverse')

test('works with short', () => {
    expect(reverseString("cat")).toBe("tac");
  });
test('works with long words', ()=>{
    expect(reverseString("monochromatic")).toBe("citamorhconom");
});
test('works with few words', ()=>{
    expect(reverseString("It's a beautifull day cutie")).toBe("eituc yad llufituaeb a s'tI");
});