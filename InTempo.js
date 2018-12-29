/**
 * 
 * InTempo JS
 *
 * Templating library 100% client side in javascript. 
 * 
 */

/**
 * for loop
 *
 * exemple : 
 * console.log(forLoop(2, (item, i) => { return `
 * 		bob ${i} 
 * `}));
 */
function forLoop(range, callback) {
	return Array(range).fill().map(callback).join('');
}