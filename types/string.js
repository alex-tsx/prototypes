//// IMPORT
import {defineProperty} from "../utils.js";


//// String.PROTOTYPE

defineProperty(String.prototype, 'elem', {
	enumerable: false,
	get: function() {
		let tempElem = document.createElement('div');
		// tempElem.insertAdjacentHTML('afterbegin', this); // .trim() - to not return a text node of whitespace
		tempElem.innerHTML = this.trim(); // .trim() - to not return a text node of whitespace
		return tempElem.firstElementChild;
	}
});

// String.prototype.elems = function() {
//	 let tempElem = document.createElement('template');
//	 tempElem.innerHTML = this; // .trim() - to not return a text node of whitespace
//	 return Array.from(tempElem.content.children);
// }

defineProperty(String.prototype, 'elems', {
	enumerable: false,
	get: function() {
		let tempElem = document.createElement('div');
		tempElem.innerHTML = this.trim(); // .trim() - to not return a text node of whitespace
		return Array.from(tempElem.children);
	}
});

defineProperty(String.prototype, 'replaceAt', {
	writable: false,
	configurable: false,
	enumerable: false,
	value: function(index, value) {
		return index < this.length ? this.substring(0, index) + value + this.substring(index + 1) : this.valueOf();
	}
});