describe("Teste do objeto Spy - calls.any", function () {
  var Calculadora = {
    somar: function (n1, n2) {
      return n1 + n2;
    },
  };

  beforeAll(function () {
    spyOn(Calculadora, "somar");
  });

  it("Deve Demonstrar o uso do calls.any", function () {
    Calculadora.somar(1,2);
    expect(Calculadora.somar.calls.any()).toBeTruthy();
  });
  
  it("Deve Demonstrar o uso do calls.count", function () {
    Calculadora.somar(1,2);
    Calculadora.somar(1,2);
    expect(Calculadora.somar.calls.count()).toEqual(3);
  });
  
});
