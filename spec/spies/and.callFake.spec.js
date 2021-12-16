describe("Teste do objeto Spy - and.callFake", function () {
    var Calculadora = {
      somar: function (n1, n2) {
        return n1 + n2;
      },
      subtrair: function(n1,n2){
          return n1 - n2;
      }
    };
  
    beforeAll(function () {
      spyOn(Calculadora, "somar").and.callFake(function(n1,n2){
        return n1 - n2;
      });
    });
  
    it("Deve transformar o métod somar em subitração", function () {
      expect(Calculadora.somar(4, 1)).toEqual(3);
    });
    
  });