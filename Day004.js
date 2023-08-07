// All about Arrays, can be created in two ways, bracket [] notation or array constructor

// [] notation

const myArray = []; //create empty array

const array2 = [2,4,5,7,8] //initialize some values


// array constructor

const array3 = new Array() //empty

const array4 = new Array(4,5,6,7) //with values
const books = new Array("Physics001", "Biology003", "Intro to Programming in C");


// accessing array elements
console.log(books[2])

// modify elements

books[1] = "Data Structures and Algorithms"
console.log(books)


const colors = ["blue", "red", "green", "black", "orange", "cyan"]

console.log(colors.length)