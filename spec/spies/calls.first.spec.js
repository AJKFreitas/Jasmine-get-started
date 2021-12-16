describe("Teste do objeto Spy - calls.first", function () {
  var Calculadora = {
    somar: function (n1, n2) {
      return n1 + n2;
    },
  };

  beforeAll(function () {
    spyOn(Calculadora, "somar").and.returnValue(10);
  });

  it("Deve Demonstrar o uso do calls.first", function () {
    Calculadora.somar(1,2);
    Calculadora.somar(2,2);

    var retorno = Calculadora.somar.calls.first();
    expect(retorno.object).toEqual(Calculadora);
    expect(retorno.args).toEqual([1,2]);
    expect(retorno.returnValue).toEqual(10);
  });
  
  
  
});
