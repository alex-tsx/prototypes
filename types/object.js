// Object.PROTOTYPE
/* Returns a deep clone of an object */
Object.defineProperty(Object.prototype, 'clone', {
    writable: false, // defaults to false ??!!!
    configurable: false, // defaults to false ??!!!
    enumerable: false, // defaults to false ??!!!
    value: function() {
        return JSON.parse( JSON.stringify(this) );
    }
});
Object.defineProperty(Object.prototype, 'subcopy', {
    writable: false, // defaults to false ??!!!
    configurable: false, // defaults to false ??!!!
    enumerable: false, // defaults to false ??!!!
    value: function() {
        const copy = {};
        for(let param of arguments) copy[param] = this[param];
        //
        return copy;
    }
});
/* Analogous to dojo.getObject
* Warning: cannot have this method named 'get'
*/
Object.defineProperty(Object.prototype, 'goGet', { // || 'gett' || 'doGet'
    writable: false, // defaults to false ??!!!
    configurable: false, // defaults to false ??!!!
    enumerable: false, // defaults to false ??!!!
    value: function(parameter, create) {
        const trace = parameter.split('.');
        let result = this;
        while(trace.length) {
            const name = trace.shift();
            // if(!name) ?
            if(result[name] == null) {
                if(create) result[name] = {};
                else return;
            }
            result = result[name];
        }
        //
        return result === this ? undefined : result;
    }
});
/* Analogous to dojo.setObject */
Object.defineProperty(Object.prototype, 'goSet', { // || 'sett' || 'doSet'
    writable: false, // defaults to false ??!!!
    configurable: false, // defaults to false ??!!!
    enumerable: false, // defaults to false ??!!!
    value: function(parameter, value) {
        const trace = parameter.split('.');
        const name = trace.pop();
        let param = this;
        while(trace.length) {
            const name = trace.shift();
            // if(!name) ?
            if(param[name] == null) param[name] = {};
            param = param[name];
        }
        //
        param[name] = value;
        //
        return this;
    }
});