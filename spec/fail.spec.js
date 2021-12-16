
describe('Teste Fail', function() {
    
    it('Deve demonstrar o uso do Fail', function() {
        var operacao = function(executar , callback){
            if (executar) {
                callback();
            }
        }

        operacao(false,function(){
            fail("não deve executar função de callback");
        })
    });
        
});
    