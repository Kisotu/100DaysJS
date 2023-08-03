console.log("first")

function greet(salutation, name){
    return `${salutation} Mr ${name}`;
}
console.log(greet("Hello", "Jacob"))


// functions named:

function Multiplyby4(value){
    return value * 4;
}

console.log(Multiplyby4(3));


// anonymous functions, used as callbacks, or arguments to HOF

const sum = function(number1, number2){
    return number1 + number2;
}
console.log(sum(3,4));

// arrow functions

const squared = (number) => number * number;

console.log(squared(4));
