//// IMPORT
import {defineProperty} from "../utils.js";


//// Object.PROTOTYPE

defineProperty(Object.prototype, 'clear', {
    writable: true, // - `false` won't let set `clear` property on ANY object at all
    configurable: false,
    enumerable: false,
    value: function() {
        if(this.constructor === Object) for(let key in this) if(this.hasOwnProperty(key)) delete this[key];
    }
});

/* Returns a deep clone of an object */
defineProperty(Object.prototype, 'clone', {
    writable: true,
    configurable: false,
    enumerable: false,
    value: function() {
        return JSON.parse( JSON.stringify(this) );
    }
});

defineProperty(Object.prototype, 'extractOf', { // || subcopy || extract
    writable: true,
    configurable: false,
    enumerable: false,
    value: function() {
        const copy = {};
        for(let param of arguments) copy[param] = this[param];
        //
        return copy;
    }
});

/* Analogous to dojo.getObject
* WARNING: cannot have this method named 'get'
*/
defineProperty(Object.prototype, 'goGet', { // || 'gett' || 'doGet'
    writable: true,
    configurable: false,
    enumerable: false,
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
defineProperty(Object.prototype, 'goSet', { // || 'sett' || 'doSet'
    writable: true,
    configurable: false,
    enumerable: false,
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

defineProperty(Object.prototype, 'callTo', { // || 'to' || 'call'
    writable: true,
    configurable: false,
    enumerable: false,
    value: function(topic, data) {
        if(this.hasOwnProperty(topic) && this[topic] instanceof Function) {
            // return this[topic](data);
            try { return this[topic](data); }
            catch(error) { console.error(error); }
        }
        else console.error(`[PROTO][Object.prototype.callTo] Topic not found`);
    }
});