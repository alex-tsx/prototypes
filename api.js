//// IMPORT
import "./types/object.js";
import "./types/function.js";
import "./types/array.js";
import "./types/string.js";
import "./types/node.js";
import "./types/html-element.js";

//// PROTOTYPEs

// Object.PROTOTYPE
// Function.PROTOTYPE
// Array.PROTOTYPE
// String.PROTOTYPE
// Node.PROTOTYPE
// HTMLElement.PROTOTYPE

// EventTarget.PROTOTYPE
EventTarget.prototype.addEventListeners = function(query, type, listener, ...rest) {
    let elems = Array.from( this.querySelectorAll(query) );
    for(let elem of elems) elem.addEventListener(type, listener, ...rest);
    // Figured, that recursively calling .matches(query) is too expensive
    return elems.length;
};
EventTarget.prototype.removeEventListeners = function(query, type, listener, ...rest) {
    let elems = Array.from( this.querySelectorAll(query) );
    for(let elem of elems) elem.removeEventListener(type, listener, ...rest);
    //
    return elems.length;
};