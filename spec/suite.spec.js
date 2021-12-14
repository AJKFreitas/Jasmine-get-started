describe("Operação de adição", function () {
  var add = (x, y) => x + y;
  

  it("Deve retornar a soma de 2 + 2", function () {
    expect(add(2, 2)).toBe(4);
  });
});
