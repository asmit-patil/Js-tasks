function isPrime(number){
    // var divisor=2;
    // if(number > 1){
    //     while(number%divisor != 0){
    //         divisor++;
    //     }
    //     if(number==divisor){
    //         console.log(number +" is prime number");
    //     }
    //     else{
    //         console.log(number+" is not prime number")
    //     }
    // }
    // else{
    //     console.log(number+" is not prime number")
    // }
var flag=0;
for(var divisor=2; divisor<=number/2; ++divisor)
{
    
    if(number%divisor==0)
    {
        flag=1;
        break;
    }
}

if (flag==0)
    console.log(number+" is a prime number.");
else
    console.log(number+" is not a prime number.");
}
isPrime(1);
isPrime(2);
isPrime(32);
isPrime(61);
