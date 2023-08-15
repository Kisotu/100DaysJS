
//TRAVERSING THE DOM => Means to move through the elements of the DOm tree.

// parentNode prop =. returns the parent node of the elem on which it is called/

document.querySelector('#dom-definition').parentNode // accesses the parent node(the div with id='intro')
//can also be chained to access grandparent node.

document.querySelector('#dom-definition').parentNode.parentNode //accesses the body elem.


//childNodes prop => returns a NodeList of all child nodes of an elem, incl element nodes and non-elem nodes lik text nodes.
document.querySelector('#dom-intro').childNodes;

//children prop => similar to childNodes but returns an HTMLCollection of only the child elem nodes.

document.querySelector('#dom-intro').children;

//firstChild prop => returns the first child node of an elem including, non-elem nodes.
document.querySelector('#dom-intro').firstChild

//lastChild prop => returns the last child node of an elem, also incl, non-elem nodes.
document.querySelector('#dom-intro').lastChild


// firstElementChild and lastElementChild properties return the first and last child element nodes of an element respectively.
// Unlike the firstChild and lastChild properties, only element nodes are returned

document.querySelector('#dom-intro').firstElementChild

document.querySelector('#dom-intro').lastElementChild

