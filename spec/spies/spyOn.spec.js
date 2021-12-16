describe("Teste do objeto Spy", function () {
  var Calculadora = {
    somar: function (n1, n2) {
      return n1 + n2;
    },
  };

  beforeAll(function () {
    spyOn(Calculadora, "somar");
  });

  it("Deve possuir o metodo somar como undefined", function () {
    expect(Calculadora.somar(1, 1)).toBeUndefined();
  });
  
});
