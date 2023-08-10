// JAVASCRIPT OBJECTS => allow grouping related data in the same variable, uaing key, value like pairs.
// values can be accessed either thru bracket [] or dot (.) notation.

const student = {
    firstName : "Maunda",
    lastName : "Machiaveli",
    age: 17,
}

student.gender = "Male" // dot notation
student['grade'] = 7 // bracket notation
console.log(student)

console.log(student.firstName)
console.log(student["grade"])

// Object.defineProperty() => allows adding new property to an object. defines or modifies property of an object and controls behavior to be:
//  read-only(cannot be modified), non-enumerable(non-iterable), non configurable(cannot be deleted or modified)


Object.defineProperty(student, 'school', {
    value: "Kenyatta University",
    writable: false,
    enumerable: true,
    configurable: true,
})

console.log(student);

//tying to change the school property wont work coz writable is false. i.e.,

student.school = "JKUAT";

console.log(student.school); //doesnt change


//lets add a new property that cant be deleted.

Object.defineProperty(student, 'language', {
    value : "Kiswahili",
    writable : true,
    enumerable : true,
    configurable : false,
})

console.log(student)

delete student.language

console.log(student.language) //doesnt delete





// Object.prototype => every object has a prototype. 
// It  is an object that contains other built-in properties and methods you can use on the main object


// Object.getPrototypeof(student) => to get properties of any object.

// Object Methods.

//Object.keys() => returns an array of a given object’s enumerable property names.

console.log(Object.keys(student));

// Object.values() => returns an array of a given object’s enumerable property values

console.log(Object.values(student));

// Object.entries() => returns an array of a given object’s enumerable property [key, value] pairs:

console.log(Object.entries(student))


// Object.assign() => copies all enumerable own properties from one or more source objects to target object.

const person = {
    name: "Kale",
    height: 23,
    race: "Black",
    balance: 234.50,
}

const newperson = Object.assign({}, student, person);

console.log(newperson);


// Object.freeze() => freezes an object so it cant be modified.

Object.freeze(newperson);

newperson.firstName = "Nishoyo";

console.log(newperson.firstName); //not modified


// Object.seal() => marks all existing properties as non-configurable and no new properties can be added.

Object.seal(student);

student.canVote = true;

console.log(student.canVote); // cant be added. 



// OBJECT DESTRUCTURING => a feature in JavaScript that allows you to unpack values from objects into distinct variables. 
// It's a convenient way to extract properties from objects without having to create separate variables for each property. 

const attendee = {
    familyName : "Muchai",
    age: 45,
    gender: "M",
    ticketStatus :"paid",
}

const { age, familyName, gender, ticketStatus } = attendee;

console.log(familyName)
console.log(gender)
console.log(ticketStatus);



// array destructuring => works same by unpacking array values to individual variables.

const genders = ["Male", "Female"];

const [a,b] = genders;

console.log(b)