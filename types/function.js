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
Function.prototype.time = function() {
    const start = new Date().getTime();
    this(...arguments);
    return new Date().getTime() - start;
};
Object.defineProperty(Function.prototype, 'atime', {
    value: function(runsN, ...args) {
        const start = new Date().getTime();
        for(let i = 0; i < runsN; i++) this(...args);
        return ( new Date().getTime() - start ) / runsN;
    }
});