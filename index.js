function sumOfDividedBy3and5(num){
    let resultOfSum = 0
    for(let i = num-1; i > 0; i--){
        if((i%3==0) || (i%5==0)){
            resultOfSum += i
            console.log("Sum of: "+i)
        }
              
    }
    return resultOfSum;
}

console.log(sumOfDividedBy3and5(11));

