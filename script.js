// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

const min = function(n1, n2) {
    if (n1 <= n2){
    return n1;
    }
    return n2;
}
console.log(min(5,10));
console.log(min(-32,-6));
console.log(min(0,0));

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4



const calculateCircumference = function (radius){
    const pi = 3.14; 
    return radius * pi * 2;
}

console.log(calculateCircumference(5));

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

const searchString = (characterLetter, word) => {
    let numberOfCharacterFound = 0;
    for (let s = 0; s <= word.length -1; s++)
    if (word[s] == characterLetter){
        numberOfCharacterFound++;
    }
    return numberOfCharacterFound;
}

console.log(searchString("s", "mississippi"));
console.log(searchString("q", "mississippi"));
