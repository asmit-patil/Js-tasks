//using non-recursion function
console.log("factorial using non recursion function.....!!!!");
function factorialNonRecursion(number) {
    var fact=1;
    for(var iterator=1; iterator<=number;iterator++){
        fact=fact*iterator;
    }
    console.log("Factorial of "+number+ " is :"+ fact);
}
factorialNonRecursion(0);
factorialNonRecursion(1);
factorialNonRecursion(5);
console.log();

// using recursion function
console.log("factorial using recursion function.....!!!!");
function factRecursion(number){
    if (number === 0)
    {
       return 1;
    }
    return number * factRecursion(number-1);
     
}
console.log("Factorial of given number is: "+factRecursion(10));
