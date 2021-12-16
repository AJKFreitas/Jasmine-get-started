describe('Teste do uso do jasmine.any', function() {
    var dobro;
    beforeAll(function(){
        dobro = jasmine.createSpy("dobro");
    });

    
    it('Deve demonstrar o uso do jasmine.any', function() {
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    });
        
});
    