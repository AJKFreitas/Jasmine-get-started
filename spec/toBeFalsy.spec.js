describe("Teste do uso do toBeFalsy", function () {
  it("Deve demonstrar o uso do toBeFalsy", function () {
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect("").toBeFalsy();
    expect(false).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(0).toBeFalsy();
    
    expect(true).not.toBeFalse();
  });
});
