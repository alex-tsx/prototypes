//// IMPORT
import {defineProperty} from "../utils.js";


//// Function.PROTOTYPE

defineProperty(Function.prototype, 'oncer', {
	get: function() {
		return function() {
			if(this.called) console.warn(`[PROTO][Function.prototype.oncer] Function already called`);
			else { this.called = true; this(...arguments); }
		}.bind(this);
	}
});

/* Turns function into one, that loggs itself, not executes */
defineProperty(Function.prototype, 'logger', {
	get: function() {
		return function() {
			console.log(`[PROTO][Function.prototype.logger] ${this.name} with`, arguments);
		}.bind(this);
	}
});

defineProperty(Function.prototype, 'time', {
	value: function() {
		const start = Date.now();
		this(...arguments);
		//
		return Date.now() - start;
	}
});

/* Avearge time of the function execution, based on runsN calls */
defineProperty(Function.prototype, 'atime', {
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
defineProperty(Function.prototype, 'debounce', {
	value: function(wait = 0) {
		const thisFunction = this;
		let timeoutId;
		//
		return function() {
			const args = arguments;
			if(timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
			if(wait > 0) timeoutId = setTimeout(() => {
				timeoutId = null;
				// thisFunction.call(this, ...args);
				thisFunction(...args);
			}, wait);
			else if(wait === 0) thisFunction(...args);
			else console.warn(`[PROTO][Function.prototype.debounce] WTF?!`);
		}
	}
});