/**
 * Helper of an example
 *
 * An example of helper that it contains some functions manage boolean variables.
 *
 * @license MIT
 * @author Alessandra Bilardi <alessandra.bilardi@gmail.com>
 * @see https://github.com/bilardi/javascript-prototype for details
 */

/**
 * bar variable
 * @type {boolean}
 */
var bar = true;

/**
 * Set bar variable
 * @param {boolean} bar
 */
function setBar(bool = true) {
    bar = Boolean(bool);
}

/**
 * Get bar value
 * @return {boolean}
 */
function getBar() {
    return bar;
}

/**
 * Get random boolean
 * @return {boolean}
 */
function baz() {
    return Boolean(Math.floor(Math.random() * 2));
}

/**
 * Get reverse of foo value
 * @param {boolean} foo
 * @return {boolean}
 */
function foo(foo) {
    return !foo;
}

/**
 * Foobar
 * @return {boolean}
 */
function foobar() {
    return foo(getBar());
}
