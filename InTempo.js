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

/**
 * insert
 *
 * insert elements in your html page
 *
 * exemple :
 * insert(`Hello`, "#id");
 */
function insert(el, query) {
	return document.querySelector(query).innerHTML += el;
}

/**
 * each 
 *
 * iterate in an array
 *
 * exemple:
 * let items = [{
 * 		name: "John Doe"
 * }]
 * 
 * console.log(each(items, (item, i) => { return `
 * 		hi ${item.name} ${i}
 * `}));
 */
function each(array, callback) {
	return array.map(callback).join('');
}

/**
 * if Statement
 *
 * if true or not
 *
 * exemple :
 * console.log(ifState(test == 2, `TRUE ${test}`, `FALSE ${test}`));
 */
function ifState(if_condition, if_true, if_false) {
	return `${if_condition ? if_true : if_false}`;
}
