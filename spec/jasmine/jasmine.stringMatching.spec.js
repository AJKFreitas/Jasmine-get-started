describe("Teste do uso do jasmine.stringMatching", function () {
  var exibirTexto;
  beforeAll(function () {
    exibirTexto = jasmine.createSpy("exibirTexto");
  });

  it("Deve demonstrar o uso do jasmine.stringMatching", function () {
    exibirTexto("Wiz onboarding");
    expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching("Wiz"));
    expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching(/wiz/i));
    expect("Wiz onboarding").toEqual(jasmine.stringMatching("Wiz"));
  });
});
