// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

const min = function(n1, n2) {
    if (n1 < n2){
    return n1
    }
    else if (n2 < n1)
    {
    return n1
    }
    else (n1 = n2)
    {
        return "they are both equal";
    }
}
console.log(min(5,10));
console.log(min(-32,-6));
console.log(min(0,0));

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

let u = 2;
let p = 3.14; 
let radius = (5);

const calculateCircumference = function (n){
    return n * p*u;
}

console.log(calculateCircumference(5));

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0


