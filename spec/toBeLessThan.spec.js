describe("Teste do uso do toBeLessThan", function () {
  it("Deve demonstrar o uso do toBeLessThen", function () {
    var PI = 3.1415;
    expect(3).toBeLessThan(PI);
    expect(4).not.toBeLessThan(PI);
  });
});
