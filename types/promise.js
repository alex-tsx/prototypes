//// IMPORT
import {defineProperty} from "../utils.js";


//// Promise.PROTOTYPE

defineProperty(Promise.prototype, 'print', {
	value: function() {
		this.then(val => {
			console.log(`[PROTO] Promise resolved with:`, val);
		}, err => {
			console.error(`[PROTO] Promise rejected with:`, err);
		});
	}
});