// Higher Order Functions and Callbacks

// functions that talke other functions as arguments or use them as retunrn values.
// Used to manipulate arrays and simplify complex tasks.

// Callback function is a function passed to another function as an argument

// map() built in HOF that takes a callback fxn as an argument.

const numbers = [1,2,3,4,5,6,7,8,9,10];

const squared = numbers.map((number) => number * number)

console.log(squared)