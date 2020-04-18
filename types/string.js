// String.PROTOTYPE
Object.defineProperty(String.prototype, 'elem', {
    enumerable: false, // defaults to false ??!!!
    get: function() {
        let tempElem = document.createElement('div');
        // tempElem.insertAdjacentHTML('afterbegin', this); // .trim() - to not return a text node of whitespace
        tempElem.innerHTML = this.trim(); // .trim() - to not return a text node of whitespace
        return tempElem.firstElementChild;
    }
});
// String.prototype.elems = function() {
//     let tempElem = document.createElement('template');
//     tempElem.innerHTML = this; // .trim() - to not return a text node of whitespace
//     return Array.from(tempElem.content.children);
// }
Object.defineProperty(String.prototype, 'elems', {
    enumerable: false, // defaults to false ??!!!
    get: function() {
        let tempElem = document.createElement('div');
        tempElem.innerHTML = this.trim(); // .trim() - to not return a text node of whitespace
        return Array.from(tempElem.children);
    }
});