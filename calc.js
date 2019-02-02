function botao (num){
    let salvar = document.calc.telinha.value;
    document.calc.telinha.value= salvar + num;
    
}
function reset(){  
    //reset visor
}
function value(valor){
    document.getElementById('telinha').value += valor;



}
function calcular(){ 
    //calcular o visor doido
    var resultado = 0;
    //resultado = document.calc.telinha.value;
    //document.calc.telinha.value = '';
    //document.calc.telinha.value('telinha').value = eval(resultado);
    resultado = document.getElementById('telinha').value;
    document.getElementById('telinha').value = '';
    document.getElementById('telinha').value = eval(resultado);




}