describe("Teste do objeto Spy - calls.all", function () {
  var Calculadora = {
    somar: function (n1, n2) {
      return n1 + n2;
    },
  };

  beforeAll(function () {
    spyOn(Calculadora, "somar").and.returnValue(10);
  });

  it("Deve demonstrar o uso do calls.all", function () {
    Calculadora.somar(1, 1);
    Calculadora.somar(1, 2);

    var retorno = Calculadora.somar.calls.all();
    expect(retorno[1].object).toEqual(Calculadora);
    expect(retorno[1].args).toEqual([1,2]);
    expect(retorno[1].returnValue).toEqual(10);
  });
  
  
  it('Deve demonstrar o uso do calls.mostRecent', function() {
    var retorno2 = Calculadora.somar.calls.mostRecent();
    expect(retorno2.object).toEqual(Calculadora);
    expect(retorno2.args).toEqual([1,2]);
    expect(retorno2.returnValue).toEqual(10);
  });
    
});
