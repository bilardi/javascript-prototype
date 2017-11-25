/**
 * Test helper of MyObjectInterface
 *
 * This is a basic unit test of Jasmine. There is a test for each function.
 * If the functions contained conditions, there would be more tests for each public function.
 *
 * @license MIT
 * @author Alessandra Bilardi <alessandra.bilardi@gmail.com>
 * @see https://github.com/bilardi/javascript-prototype for details
 */

describe("MyObjectAbstract", function() {
    describe("when it is initialized", function(){
        it("should be able to create it", function() {
            myObject = new MyObjectAbstract();
            expect(myObject).toEqual(jasmine.objectContaining({}));
        });
    });

    describe("when baz is used", function(){
        it("should be able to return a random boolean", function() {
            var boolean = myObject.baz();
            expect(boolean).toEqual(new Boolean(boolean));
        });
    });

    describe("when foo is called", function(){
        it("should be able to get nothing except an error exception because is not implemented", function() {
            myObject = new MyObjectAbstract();
            expect(myObject.foo()).toBe(undefined);
        });
    });
});
