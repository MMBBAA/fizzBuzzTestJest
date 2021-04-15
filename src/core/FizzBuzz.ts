export function fizzBuzz(n){

    if(n%15==0)
    return "fizzbuzz";
    if(n%3==0)
    return "fizz";
    if(n%5==0)
    return "buzz";
    return n;
/*
refactor solution

const divisibleBy=(divider,n)=>n%divider==0;
if(divisibleBy(15,n)) return "fizzbuzz";
if(divisibleBy(3,n)) return "fizz";
if(divisibleBy(5,n)) return "buzz"
return n;
*/
}
