
describe('Teste do uso do toContain', function() {
    
    it('Deve demonstrar o uso do toContain', function() {
        var texto = "Meu nome é Angelo";
        var frutas = ["Laranja","banana","pera"];

        expect(texto).toContain("Angelo");
        expect(texto).not.toContain("angelo");
        expect(frutas).toContain("Laranja");
        expect(frutas).not.toContain("uva");
    });
        
});
    