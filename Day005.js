// Array methods


// filter() creates new array with elements that only pass a certain condition
// get oly the even numbers

const numbers = [1,2,3,4,6,8,47,56,6.8]

const evenNumbers = numbers.filter(number => number % 2 ===0);
console.log(evenNumbers)

//indeOf() finds index of specific element

const rangi = ["blue", 'green', "red", "magenta"];
const index = rangi.indexOf("magenta")
console.log(index)

// sort() arrange array either in ascending or descending order


const ages = [34,23,55,64,28,56];
ages.sort((a, b) => b-a); //b-a gives descending, a-b gives ascending
console.log(ages)

// NB => sort function modifies the originnal array. Thus you can make a copy if you want to preserve the original array.
// Can do so bt using the spread operator. i.e.,

const sortedages = [...ages]; // then manipulate this.

sortedages.sort((a,b) => a-b)
console.log(sortedages)


// push() adds one or more elements to the end of array

const colors = ["blue", "red", "black"];

console.log(colors);

colors.push('yellow');
console.log(colors)


// pop() => removes the last element from an array

const favBooks = ["Merlin", "Python Basics", "Javascript for Dummies", "Atomic Habits"];
favBooks.pop();
console.log(favBooks)


// shift() => removes the first element from an array and return the removed element
console.log(favBooks.shift());
console.log(favBooks)

// unshift() => adds one or more elements to the front of an array and returns its new length

favBooks.unshift("Atomic Habits", "Data Structures", "Thinking fast and slow")
console.log(favBooks)


// slice() => extracts portion of an array. Takes 2 arguments, starting index(inclusive) and closing index(exclusive).

const top3Books = favBooks.slice(0,3);
console.log(top3Books);
console.log(favBooks);

// slice() does not modify original array.


// splice() => changes the content of an array by removing or replacing existing elements. Can take more than 2 arguments.
// array.splice(index, deleteCount, item1, ..., itemN). This method modifies the original array

// removing at given index example.

const fruits = ['Banana', "Orange", "Apple", "Mango"];

const removed = fruits.splice(2,1) //remove one element at index 1
console.log(removed);


// replacing elements: We provide deleteCount equal to the number of elements we want to replace and the new elements as additional parameters.

// replace first 2 fruits with others

const replaced = fruits.splice(0, 2, "Pineapple", "Strawberry");
console.log(replaced);

console.log(fruits);



// join() => joins all elements of an array into a string. Takes an optional arrg(separator to use between the elements). Uses comma if not arrg is specified

const data = ["Alice", 24, "F"];

// to csv format
const csv = data.join(",")
console.log(csv)



// reverse() => reverse the order of the elements in an array.

const order = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"];
const reversed = [...order]
reversed.reverse()
console.log(reversed)
