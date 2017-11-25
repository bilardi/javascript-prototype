/**
 * My Object Interface of an example
 *
 * An example of interface object that it contains one abstract method.
 *
 * @license MIT
 * @author Alessandra Bilardi <alessandra.bilardi@gmail.com>
 * @see https://github.com/bilardi/javascript-prototype for details
 */

/**
 * Interface of an object
 * @interface MyObject
 */
function MyObjectInterface() {}

/**
 * Get bar value
 * @example <caption>Example of a virtual function description</caption>
 * @function
 * @name MyObjectInterface#bar
 * @return {boolean}
 */

/**
 * Get bar value
 * @example <caption>Example of an abstract function description</caption>
 * @abstract
 * @return {boolean}
 */
MyObjectInterface.prototype.getBar = function() {}
