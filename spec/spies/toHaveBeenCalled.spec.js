describe("Teste do objeto Spy - toHaveBeenCalled", function () {
    var Calculadora = {
      somar: function (n1, n2) {
        return n1 + n2;
      },
    };
  
    beforeAll(function () {
      spyOn(Calculadora, "somar");
    });
  
    it("Deve chamar o método somar ao menos uma vez", function () {
      expect(Calculadora.somar).not.toHaveBeenCalled();// recomendado o expect no final do teste
      Calculadora.somar(1, 1);
      expect(Calculadora.somar).toHaveBeenCalled();
    });
    
  });