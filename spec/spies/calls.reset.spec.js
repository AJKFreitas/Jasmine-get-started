describe("Teste do objeto Spy - calls.reset", function () {
  var Calculadora = {
    somar: function (n1, n2) {
      return n1 + n2;
    },
  };

  beforeAll(function () {
    spyOn(Calculadora, "somar").and.returnValue(10);
  });

  it("Deve Demonstrar o uso do calls.reset", function () {
    Calculadora.somar(1,2);
    Calculadora.somar(2,2);


    expect(Calculadora.somar.calls.any()).toBeTruthy();
    Calculadora.somar.calls.reset();

    expect(Calculadora.somar.calls.any()).toBeFalsy();
  });
  
  
  
});
