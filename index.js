/* 
   Função que retorna a soma de todos os divisiveis 
   por 3 e 5 menores que num (o numero passado)

*/
function sumOfDividedBy3and5(num){
    let resultOfSum = 0
    for(let i = num-1; i > 0; i--){

        //Testa se é divisível por 3 ou 5 e soma
        if((i%3==0) || (i%5==0)){
            resultOfSum += i
            // Mostra os números que estão serão somados no console
            console.log("Divisível por 3 ou 5: "+i)
        }
              
    }
    //retorna o resultado da soma
    return resultOfSum;
}


function setResult(){

    let numLabel = document.getElementById('num-int')
    let resultP = document.getElementById('result')

    let result = sumOfDividedBy3and5(numLabel.value)
    resultP.innerHTML = result
    console.log("Resultado: "+result);


    return

}


//let result = document.getElementById('result');
//let resultado = sumOfDividedBy3and5(10);


//setResult(resultado)
//result.innerHTML=resultado

