// Higher Order Functions and Callbacks

// functions that talke other functions as arguments or use them as retunrn values.
// Used to manipulate arrays and simplify complex tasks.

// Callback function is a function passed to another function as an argument

// map() built in HOF that takes a callback fxn as an argument.

const numbers = [1,2,3,4,5,6,7,8,9,10];

const squared = numbers.map((number) => number * number)

console.log(squared)
//  the anonymous fxn (number) => number * number) is passed as an argument to the map fxn.


// capitalize each element

const words = ["this", "is", "such", "a", "great", "day"]

const capitalized = words.map((word) => 
word.toUpperCase()
);

console.log(capitalized);








// Creating HOFs

// return a function from another function
function higherOrder(){
    return function(){
        console.log("This is the returned function");
    }
}
const returnedFunction = higherOrder();

returnedFunction();


// accept a function as an argument

function higherOrder2(callback){
    callback()
}

higherOrder2(function(){
    console.log("Hello from the callback")
})



// Accepting multiple functions as arguments

function higherOrder3(func1, func2){
    func1();
    func2();
}


higherOrder3(
    function(){
        console.log("Hello from func1");
    },
    function(){
        console.log("Hello from func2")
    }
);



// return a function that accepts further arguments.

function adder(x){
    return function(y){
        return x+ y; //concept of closures
    }
}

const add2 = adder(2);
console.log(add2(3));





const hof = (callback) => {
    const task = "Create an algorithm shocking to the world!";

    callback(task);
}

hof(console.log)