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





// Object.prototype => 