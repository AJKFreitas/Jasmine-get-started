describe("Teste do objeto Spy - and.throwError", function () {
  var Calculadora = {
    somar: function (n1, n2) {
      return n1 + n2;
    },
    subtrair: function (n1, n2) {
      return n1 - n2;
    },
  };

  beforeAll(function () {
    spyOn(Calculadora, "somar").and.throwError("erro");
  });

  it("Deve lançar um erro ao somar", function () {
    expect(function () {
      Calculadora.somar(4, 1);
    }).toThrowError("erro");
  });
});
