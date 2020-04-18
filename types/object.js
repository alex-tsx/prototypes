// Object.PROTOTYPE
/* Returns a deep clone of an object */
Object.defineProperty(Object.prototype, 'clone', {
    writable: false, // defaults to false ??!!!
    configurable: false, // defaults to false ??!!!
    enumerable: false, // defaults to false ??!!!
    value: function() {
        return JSON.parse( JSON.stringify(this) )
    }
});