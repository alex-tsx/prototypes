//// IMPORT
import {defineProperty} from "../utils.js";


//// Array.PROTOTYPE
defineProperty(Array.prototype, 'last', {
    configurable: false,
    enumerable: false,
    get: function() { return this[this.length - 1]; }
});
// Array.prototype.sift = function(cond) {
//     const sifted = [];
//     this.forEach(item => {
//         if(cond(item)) sifted.push(item);
//     });
//     return sifted;
// }
defineProperty(Array.prototype, 'remove', { // || delete()
    writable: false,
    configurable: false,
    enumerable: false,
    value: function(item, abstract=false) {
        let index;
        if(abstract) {
            for(let i = 0; i < this.length; i++) { if(this[i] == item) index = i; }
        }
        else {
            for(let i = 0; i < this.length; i++) { if(this[i] === item) index = i; }
        }
        //
        if(index > -1) this.splice(index, 1); // do we need to check if index > -1 ???!!!!!
        //
        return index;
    }
});
defineProperty(Array.prototype, 'findAndRemove', { // || pullout
    writable: false,
    configurable: false,
    enumerable: false,
    value: function(cond) {
        const i = this.findIndex(cond);
        const elem = this[i];
        if(i > -1) this.splice(i, 1);
        //
        return elem;
    }
});
// Array.prototype.call = function(func, ...rest){
//     this.forEach(e => { e[func](...rest); })
// }
defineProperty(Array.prototype, 'calc', {
    writable: false,
    configurable: false,
    enumerable: false,
    value: function(word, abstract=false) {
        let counts = 0;
        if(abstract) {
            for(let i = 0; i < this.length; i++) { if(this[i] == word) counts++; }
        }
        else {
            for(let i = 0; i < this.length; i++) { if(this[i] === word) counts++; }
        }
        //
        return counts;
    }
});
defineProperty(Array.prototype, 'count', {
    writable: false,
    configurable: false,
    enumerable: false,
    value: function(cond) {
        let counts = 0;
        for(let i = 0; i < this.length; i++) { if(cond(this[i])) counts++; }
        //
        return counts;
    }
});
defineProperty(Array.prototype, 'asyncForEach', {
    writable: false,
    configurable: false,
    enumerable: false,
    value: async function(callback) {
        for(let i = 0; i < this.length; i++) { await callback(this[i], i, this); }
    }
});
// Array.prototype.call = function(func, ...rest){
//     this.forEach(e => { e[func](...rest); })
// }