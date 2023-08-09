// Built in HOFS and Array Methods...

// forEach() => an array method that executes a callback fxn on each of its elements. Does not modify array and does not return new array.


const cities = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Narok"];

cities.forEach((name) => console.log(name)); //logs the name of the cities


const names = ["jake", "adrian", "joshua", "naomi", "trevor", "brian", "ajode"];

// we want to capitalize each first letter

const titleCasedNames = [];

names.forEach((name1) => {
    const capitalizedName = name1[0].toUpperCase() + name1.slice(1);

    titleCasedNames.push(capitalizedName);
})

console.log(titleCasedNames);



// filter() => filter out elements that meet a certain condition.

// i.e, countrie that start with N

const countries = ["Nigeria", "UK", "Nicaragua", "Netherlands", "Canada", "Kenya", "Norway", "USA"];

const startWithN = countries.filter((country) => country.startsWith("N"));

console.log(startWithN)

const startWithU = countries.filter((kantry) => kantry.charAt(0) ==="U");

console.log(startWithU);



// reduce() => iterates throigh an array, performs an action and returns a single value.
//  add all elements inside array.

const marksScored = [10,45,67,83,18,37,56,78];

const totalPoints = marksScored.reduce(
    (a,b) => a+b
)
console.log(totalPoints)


// or


const sum = marksScored.reduce((accummulator, currentValue) => {
    return accummulator + currentValue;
});
console.log(sum)


// every() => checks if all elements meet a condition. all must meet the condition otherwise it will return false.
// some() => less stricter. Checks if at least one element meets the criteria
//**** includes() => checks if a string has a specified substring or if an array has a specified element.




// JAVASCRIPT TIMING METHODS. => allow us to schedule the execution of functions at a later time or regular intervals.

// setTimeout() => allowws scheduling after a specified no of milliseconds.

const displayMessage = () => {
    console.log("Hello there Mr Jake");
}

// setTimeout(displayMessage, 500);



// setInterval() => allows scheduling execution of a fxn at regular intervals.

const every4Seconds = () => {
    console.log("Display this every 4 seconds!");
};

// setInterval(every4Seconds, 4000);

