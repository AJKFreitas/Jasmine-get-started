describe('Teste do uso do jasmine.clock', function() {
    var dobro;
    beforeAll(function(){
        dobro = jasmine.createSpy("dobro");
    });

    
    it('Deve demonstrar o uso do jasmine.clock', function() {
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    });
        
});
    