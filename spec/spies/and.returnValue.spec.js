describe("Teste do objeto Spy - and.returnValue", function () {
    var Calculadora = {
      somar: function (n1, n2) {
        return n1 + n2;
      },
      subtrair: function(n1,n2){
          return n1 - n2;
      }
    };
  
    beforeAll(function () {
      spyOn(Calculadora, "somar").and.returnValue(10);
      spyOn(Calculadora, "subtrair");
    });
  
    it("Deve retornar 10 para o método somar", function () {
      expect(Calculadora.somar(1, 1)).toEqual(10);
      expect(Calculadora.subtrair(2, 1)).toBeUndefined();
    });
    
  });