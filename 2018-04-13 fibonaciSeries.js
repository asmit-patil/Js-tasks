// .........................................using normal function.................................... //
function fibonacci(range){
   
    var fibonacci="";
    var firstNumber =0, secondNumber= 1,sum=0;
    for (var ietrator=0; ietrator< range; ietrator++){
        sum= firstNumber+ secondNumber;
        fibonacci+=" "+firstNumber;
        firstNumber= secondNumber;
        secondNumber=sum;
        
    }
    console.log("fibonaci series of "+ range+" numbers is:["+fibonacci+" ]")
}
fibonacci(2);
// ...................................................using recursion function........................... //
function fibonaciRecursion(number) {
    if (number == 1) return [0,1];
    
    var arr = fibonaciRecursion(number - 1);
    arr.push( arr[number - 1] + arr[number - 2] );
    
    return arr;
  }

 console.log("fibonaci series is :"+fibonaciRecursion(7));
 