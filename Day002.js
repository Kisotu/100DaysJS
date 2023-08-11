// control structures, loops.

// for loop. loops a certain number of times

// for(initialize; condition, inc/decrement){ 
//     statement
// }

// function to raise a number to another. 

function raiseToPower(base, exponent){
    let result = 1;

    for(let i=0; i<exponent; i++){
        result *= base;
    }
    return result;
}

console.log(raiseToPower(3,4))

// for loop to print a string 5 times

let times = 5

// for(let i=0; i<=10; i++){
//     console.log("Hello Mr Jake")
// }

// while loop. loops until the statement is false. can go infinitely
// while loop to print numbers from 20 to 1;

let i = 20

while(i>=1){
    // console.log(i);
    i--
}


// switch statement. accespts expression and execurtes one of many code blocks.

// program that prints shape depending on number of angles provided.

let anglesCount = 5;
let shape;

switch(anglesCount){
    case 3:
        shape = "Triangle";
        break;
    case 4:
        shape = "Quadritalteral";
        break;
    case 5:
        shape = "Pentagon";
        break;
    default:
        shape = "Invalid";
        break;
}

console.log(shape)

// do while loop: a loop that executes one or more time.
// print from 1 to 10;

let numb3 = 1;

do{
    console.log(numb3);
    numb3++;
} while(numb3<=4)


// continue keyword skips the current iteration

// print 1 to 10
for(let i=1;i<=10;i++){
    if(i==5){
        continue; //skips the iteration when i==5
    }
    console.log(i)
}

// break keyword forcefully stops the loop even when the condition for the loop is met.

// ie stops the loop when the sum of its members reaches above 20;
let sum = 0;

for (let i= 1; i<=10; i++){
    if(sum>20){
        break;
    }
    sum+=i;
}
console.log(sum)



//** */ ternary operator: condition ? expression1 : expression2   not a loop

const age = 18;

age > 21 ? console.log("Acccess Allowed") : console.log("Access Denied!")

// for... in... => used to iterate over an object's enumerable properties.

const person = {
    name : "Mayiolo",
    age: 12,
    city: "Nairobi",
}

for(let prop in person){
    console.log(`${prop} : ${person[prop]}`)
}


// the "in" operator checks if a specified element exists in an object, array.


if("age" in person){
    console.log("age exists")
}
else{
    console.log("does not exist")
}


// for.. in.. iterates over an array's indexes.

let colors = ["blue", "red", "yellow", "black"];

for(let index in colors){
    console.log(colors[index])
    console.log(index)// prints indexes
}



// for..of.. => iterates over the values of an array rather than the indexes.


for( let val in colors){
    console.log(colors[val]) // prints the vallues
}


// can also iterate over the characters of a string

let firstName = "Nairobi";

for(let character of firstName){
    console.log(character)
}


