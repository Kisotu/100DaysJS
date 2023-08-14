// DOCUMENT OBJECT MODEL
//Accessing the dom
// getElementsByTagName();

document.getElementsByTagName('p'); //gets all the paragraph elements

const para = document.getElementsByTagName('p');

// console.log(para)


//getElementById();

const byID = document.getElementById('dom-definition').innerHTML //gets the exact id
// console.log(byID)


//getElementsByClassName();

const byClass = document.getElementsByClassName('paragraph'); //selects elements by that class name

// console.log(byClass);

//querySelector() and querySelectorAll();
// allow access to elements eiher byid, clas, or other attributes.

const tagName_Class = document.querySelector('div.paragraph');

// console.log(tagName_Class);


const getp = document.querySelector('p#dom-definition'); //get paragraph with id of dom-definition
// console.log(getp)

//querySelectorAll()

const getAll = document.querySelectorAll('p.paragraph');

// console.log(getAll);




// Accessing element attributes and style props. can access attributes using the getAttribute and the attributes properrty.

// getAttribute() method takes name of attribute as arrg and returns value of attribute

const idValue = document.querySelector('#dom-definition').getAttribute('id') //returns value of the id attribute;

//the attributes prop returns a NamedNodeMap object that contains all the attributes of an element

const attribs = document.querySelector('#dom-definition').attributes
// console.log(attribs)




// style property. Returns an object that contains all the style properties of an element.

const getStyle = document.querySelector('#dom-definition').style

// returns a CSSStyleDeclaration Object. Each style property is represented in camelCase.


const bColor = document.querySelector('#dom-definition').style['backgroundColor'] = 'brown'
console.log(bColor);


document.querySelector('#dom-definition').id = 'new-dom-definition'

// setAttribute() => used to modify the attributes

document.querySelector('#new-dom-definition').setAttribute('id','dom-definition')

//style's setProperty

document.querySelector('div.paragraph').style.setProperty('font-size', '28px')
