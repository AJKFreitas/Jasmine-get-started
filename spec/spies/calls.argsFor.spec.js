describe("Teste do objeto Spy - calls.argsFor", function () {
  var Calculadora = {
    somar: function (n1, n2) {
      return n1 + n2;
    },
  };

  beforeAll(function () {
    spyOn(Calculadora, "somar");
  });

  it("Deve Demonstrar o uso do calls.argsFor", function () {
    Calculadora.somar(1,2);
    Calculadora.somar(2,2);
    expect(Calculadora.somar.calls.argsFor(0)).toEqual([1,2]);
    expect(Calculadora.somar.calls.argsFor(1)).toEqual([2,2]);
  });
  
  it("Deve Demonstrar o uso do calls.allArgs", function () {
    Calculadora.somar(3,1);
    Calculadora.somar(3,2);
    expect(Calculadora.somar.calls.allArgs()).toEqual([[1,2],[2,2],[3,1],[3,2]]);
  });
  

});
