describe("Teste do objeto Spy - toHaveBeenCalledWith", function () {
    var Calculadora = {
      somar: function (n1, n2) {
        return n1 + n2;
      },
    };
  
    beforeAll(function () {
      spyOn(Calculadora, "somar");
    });
  
    it("Deve chamar o método somar com os parametros válidos", function () {
      Calculadora.somar(1, 1);
      Calculadora.somar(1, 2);
      expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
      expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
    });
    
  });