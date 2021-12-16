describe("Teste do objeto Spy - and.returnValues", function () {
    var Calculadora = {
      somar: function (n1, n2) {
        return n1 + n2;
      },
      subtrair: function(n1,n2){
          return n1 - n2;
      }
    };
  
    beforeAll(function () {
      spyOn(Calculadora, "somar").and.returnValues(1,5,0);
      spyOn(Calculadora, "subtrair");
    });
  
    it("Deve retornar valores distintos para o método somar", function () {
      expect(Calculadora.somar(1, 1)).toEqual(1);
      expect(Calculadora.somar(2, 1)).toEqual(5);
      expect(Calculadora.somar(5, 1)).toEqual(0);
      expect(Calculadora.somar(5, 1)).toBeUndefined();
    });
    
  });