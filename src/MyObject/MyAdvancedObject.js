/**
 * My advanced Object of an example
 *
 * An example of object that it contains some functions manage boolean variables.
 * The object implements and augments all methods of an interface object and an abstract object.
 *
 * @license MIT
 * @author Alessandra Bilardi <alessandra.bilardi@gmail.com>
 * @see https://github.com/bilardi/javascript-prototype for details
 */

/**
 * My advanced Object is an example
 * @param {boolean} bar
 * @constructor
 */
function MyAdvancedObject(bar = true) {
    this.bar = Boolean(bar);
}

/**
 * My advanced Object implements and augments of all methods
 * @implements {MyObjectInterface}
 * @extends MyObjectAbstract
 */
MyAdvancedObject.prototype = new MyObjectAbstract();

/**
 * Get bar value
 * @override
 * @return {boolean}
 */
MyAdvancedObject.prototype.getBar = function() {
    return this.bar;
};
    
/**
 * Get reverse of foo value
 * @override
 * @param {boolean} foo
 * @return {boolean}
 */
MyAdvancedObject.prototype.foo = function(foo) {
    return !foo;
};

/**
 * Foobar
 * @return {boolean}
 */
MyAdvancedObject.prototype.foobar = function() {
    return this.foo(this.getBar());
};
