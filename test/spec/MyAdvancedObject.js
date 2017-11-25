/**
 * Test helper of MyAdvancedObject
 *
 * This is a basic unit test of Jasmine. There is a test for each function.
 * If the functions contained conditions, there would be more tests for each public function.
 *
 * @license MIT
 * @author Alessandra Bilardi <alessandra.bilardi@gmail.com>
 * @see https://github.com/bilardi/javascript-prototype for details
 */

describe("MyAdvancedObject", function() {
    describe("when it is initialized", function(){
        it("should be able to create it", function() {
            myObject = new MyAdvancedObject();
            expect(myObject).toEqual(jasmine.objectContaining({}));
        });
        it("should be able to initialize bar to default value", function() {
            myObject = new MyAdvancedObject();
            expect(myObject).toEqual(jasmine.objectContaining({"bar":true}));
        });
        it("should be able to initialize bar with true value", function() {
            myObject = new MyAdvancedObject(true);
            expect(myObject).toEqual(jasmine.objectContaining({"bar":true}));
        });
        it("should be able to initialize bar with false value", function() {
            myObject = new MyAdvancedObject(false);
            expect(myObject).toEqual(jasmine.objectContaining({"bar":false}));
        });
    });

    describe("when baz is used", function(){
        it("should be able to return a random boolean", function() {
            var boolean = myObject.baz();
            expect(boolean).toEqual(new Boolean(boolean));
        });
    });
});
