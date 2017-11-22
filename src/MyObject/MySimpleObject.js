/**
 * My simple Object of an example
 *
 * An example of object that it contains some functions manage boolean variables.
 *
 * @license MIT
 * @author Alessandra Bilardi <alessandra.bilardi@gmail.com>
 * @see https://github.com/bilardi/javascript-prototype for details
 */

/**
 * My simple Object is an example
 * @param {boolean} bar
 * @constructor
 */
function MySimpleObject(bar = true) {
    this.bar = Boolean(bar);
}

/**
 * My simple Object implements and augments of some methods
 *
 * @implements {MyObjectInterface}
 * @augments MyObjectAbstract
 */
MySimpleObject.prototype = {
    /**
     * Get bar value
     * @override
     * @return {boolean}
     */
    getBar: function() {
        return this.bar;
    },
    
    /**
     * Get random boolean
     * @return {boolean}
     */
    baz: function() {
        return Boolean(Math.floor(Math.random() * 2));
    },

    /**
     * Get reverse of foo value
     * @override
     * @param {boolean} foo
     * @return {boolean}
     */
    foo: function(foo) {
        return !foo;
    },

    /**
     * Foobar
     * @return {boolean}
     */
    foobar: function() {
        return this.foo(this.getBar());
    }
};
