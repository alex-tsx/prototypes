// Array.PROTOTYPE
Object.defineProperty(Array.prototype, 'last', {
    enumerable: false, // defaults to false ??!!!
    get: function() { return this[this.length - 1]; }
});
// Array.prototype.sift = function(cond) {
//     const sifted = [];
//     this.forEach(item => {
//         if(cond(item)) sifted.push(item);
//     });
//     return sifted;
// }
// Array.prototype.remove = function(item) { // || delete()
//     const i = this.indexOf(item);
//     if(i > -1) this.splice(i, 1); // do we need to check if i > -1 ???!!!!!
//     //
//     return i;
// };
Object.defineProperty(Array.prototype, 'remove', {
    writable: false, // defaults to false ??!!!
    configurable: false, // defaults to false ??!!!
    enumerable: false, // defaults to false ??!!!
    value: function(item) { // || delete()
        const i = this.indexOf(item);
        if(i > -1) this.splice(i, 1); // do we need to check if i > -1 ???!!!!!
        //
        return i;
    }
});
// Array.prototype.call = function(func, ...rest){
//     this.forEach(e => { e[func](...rest); })
// }
Object.defineProperty(Array.prototype, 'calc', {
    writable: false, // defaults to false ??!!!
    configurable: false, // defaults to false ??!!!
    enumerable: false, // defaults to false ??!!!
    value: function(word) {
        let counts = 0;
        for(let i = 0; i < this.length; i++) if(this[i] == word) counts++;
        return counts;
    }
});
Object.defineProperty(Array.prototype, 'count', {
    writable: false, // defaults to false ??!!!
    configurable: false, // defaults to false ??!!!
    enumerable: false, // defaults to false ??!!!
    value: function(cond) {
        let counts = 0;
        for(let i = 0; i < this.length; i++) if(cond(this[i])) counts++;
        return counts;
    }
});
Object.defineProperty(Array.prototype, 'asyncForEach', {
    writable: false, // defaults to false ??!!!
    configurable: false, // defaults to false ??!!!
    enumerable: false, // defaults to false ??!!!
    value: async function(callback) {
        for(let i = 0; i < this.length; i++) await callback(this[i], i, this);
    }
});
// Array.prototype.call = function(func, ...rest){
//     this.forEach(e => { e[func](...rest); })
// }