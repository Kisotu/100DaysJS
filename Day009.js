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


const bColor = document.querySelector('#dom-definition').style['backgroundColor'] = 'cyan'
// console.log(bColor);


document.querySelector('#dom-definition').id = 'new-dom-definition'

// setAttribute() => used to modify the attributes

document.querySelector('#new-dom-definition').setAttribute('id','dom-definition')

//style's setProperty

document.querySelector('div.paragraph').style.setProperty('font-size', '28px')//takes two arrgs, the prop and its value

// innerHTML prop returns the HTML content of an element in string form.

// console.log(document.body.innerHTML); 

//innerHTML also modifies the HTML content of an element.
document.body.innerHTML += '<p>Added using the innerHTML property!</p>';





//Creating DOM Elements
//createElement() => returns a new element with the specified tag name but doesnt add to the dom.

// appendChild() => takes an element as arrg and adds it to the DOM.

let newButton = document.createElement('button');

newButton.textContent = 'New button';

newButton.setAttribute('id', 'new-bnt');

//add to the DOM

document.body.appendChild(newButton);


//insertBefore() adds a new element before a specified element.
let newHeading = document.createElement('h2')
newHeading.textContent = 'Working with the Dom';

document.body.insertBefore(newHeading, document.querySelector('#dom-definition'))


//replaceChild() => replaces an element with new element.
let newParagraph = document.createElement('p')
newParagraph.setAttribute('class', 'p-class')
newParagraph.textContent = 'Replaced another paragraph using replaceChild()';

document.body.replaceChild(newParagraph, document.querySelector('#dom-example'))


//insertAdjacentHTML() => inserts HTML content ta specified position relative to the element on whuch it is called. takes two arrgs, the position and the HTML content;
// positions:

// • beforebegin: Before the element itself.
// • afterbegin: Just inside the element, before its first child.
// • beforeend: Just inside the element, after its last child.
// • afterend: After the element itself.


document
    .querySelector('.p-class')
    .insertAdjacentHTML(
        'beforebegin',
        '<p>The Dom is easy to work with: added with beforebegin insertAdjacentHTML</p>'
)


//insertAdjacentElement()=> adds new element. Take an element as its second arrg instead of HTML content.

let newP = document.createElement('p')
newP.textContent = 'This is a new Paragraph added using insertAdjacentElement';

document
    .querySelector('#button')
    .insertAdjacentElement('afterend', newP);



// insertAdjacentText() => inserts text at a specified position rlative to the element which it is called.

document.body.insertAdjacentText(
    'beforeend',
    ' JavaScript is for everyone'
);


//cloneNode() => returns a copy of the elment on which it is called. takes a boolean arrg that determines whether the copy will incliude the elem's children.

let y = document.querySelector('button').cloneNode(true)
// console.log(y)


//createTextNode() => creates a text ndoe. 1 arrg:  the text to be added to the text node.
let textNode = document.createTextNode('Created using createTextNode()');
document.querySelector('#dom-definition').appendChild(textNode);






//REMOVING ELEMS FROM THE DOM:

//removeChild() => reomves an element. Takes 1 arrg; the element to be removed.

document.body.removeChild(document.querySelector('#new-bnt'));

//can also use the innerHTML property to set the value of an element to an empty string.

// document.querySelector('class or id'),innerHTML = ''

