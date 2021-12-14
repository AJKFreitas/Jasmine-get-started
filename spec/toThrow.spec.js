
describe('Teste de uso do toThrow', function() {
    
    it('Deve demosntrar o uso do toThrow', function() {
        
        function multiplicar(){
            return numero * 10;
        }

        function somar (num1, num2){
            return num1 + num2;
        }

        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();
    });
        
});
    