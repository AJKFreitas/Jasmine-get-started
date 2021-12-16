describe("Teste do uso do jasmine.arrayContaining", function () {
  var numero;
  beforeAll(function () {
    numeros = [1, 2, 3, 4, 5, 6];
  });

  it("Deve demonstrar o uso do jasmine.arrayContaining", function () {
    expect(numeros).toEqual(jasmine.arrayContaining([3]));
    expect(numeros).toEqual(jasmine.arrayContaining([2, 4]));
    expect(numeros).not.toEqual(jasmine.arrayContaining([8]));
  });
});
