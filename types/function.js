// Function.PROTOTYPE
Object.defineProperty(Function.prototype, 'oncer', {
    get: function() {
        return function() {
            if(this.called) console.warn(`[Function.PROTOTYPE.oncer] Function already called`);
            else { this.called = true; this(...arguments); }
        }.bind(this);
    }
});
/* Turns function into one, that loggs itself, not executes */
Object.defineProperty(Function.prototype, 'logger', {
    get: function() {
        return function() {
            console.log(`[Function.PROTOTYPE.logger] ${this.name} with`, arguments);
        }.bind(this);
    }
});
Object.defineProperty(Function.prototype, 'time', {
    value: function() {
        const start = Date.now();
        this(...arguments);
        //
        return Date.now() - start;
    }
});
/* Avearge time of the function execution, based on runsN calls */
Object.defineProperty(Function.prototype, 'atime', {
    value: function(runsN, ...args) {
        const start = Date.now();
        for(let i = 0; i < runsN; i++) this(...args);
        //
        return ( Date.now() - start ) / runsN;
    }
});
/*
* @param wait: :Number,
* ? @param options: ? :{
*   leading, maxWait, trailing
* }
* WARNING: Never used/called/tested
*/
Object.defineProperty(Function.prototype, 'debounce', {
    value: function(wait=0) {
        const thisFunction = this;
        let timeoutId;
        return function() {
            const args = arguments;
            if(timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
            if(wait > 0) timeoutId = setTimeout(() => {
                timeoutId = null;
                thisFunction(...args);
            }, wait);
            else if(wait === 0) thisFunction(...args);
            else console.warn(`[Function.prototype.debounce] WTF?!`);
        }
    }
});