/**
 * My Object Abstract of an example
 *
 * An example of object abstract that it contains one abstract method and one method implemented.
 *
 * @license MIT
 * @author Alessandra Bilardi <alessandra.bilardi@gmail.com>
 * @see https://github.com/bilardi/javascript-prototype for details
 */

/**
 * Abstract of an object
 * @constructor
 */
function MyObjectAbstract() {}

/**
 * Get random boolean
 * @return {boolean}
 */
MyObjectAbstract.prototype.baz = function() {
    return Boolean(Math.floor(Math.random() * 2));
};

/**
 * Get reverse of foo value
 * @abstract
 * @param {boolean} foo
 * @return {boolean}
 */
MyObjectAbstract.prototype.foo = function(foo) {}
