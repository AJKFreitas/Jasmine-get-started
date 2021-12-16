describe("Suite externa", function () {
  var contadorExterno = 0;

  beforeEach(function () {
    contadorExterno++;
  });

  it("Deve conter 1 para contadorExterno", function () {
    expect(contadorExterno).toEqual(1);
  });
  xit("Deve conter 1 para contadorExterno desabilitado", function () {//x desabilita o teste
    expect(contadorExterno).toEqual(1);
  });
  xit("Deve conter 1 para contadorExterno desabilitado", function () {//pending desabilita o teste
    expect(contadorExterno).toEqual(1);
    pending("Implementar - teste pendente")
  });
  xit("Deve conter 1 para contadorExterno desabilitado - sem corpo"// desabilita o teste sem corpo
  );

 xdescribe("Suite interna", function () {//x desabilita a suite
    var contadorInterno = 0;
    beforeEach(function () {
      contadorInterno++;
    });

    it("Deve validar o valor dos dois contadores", function () {
      expect(contadorInterno).toEqual(1);
      expect(contadorExterno).toEqual(2);
    });
  });
});
