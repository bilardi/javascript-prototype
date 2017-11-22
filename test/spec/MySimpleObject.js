/**
 * Test helper of MySimpleObject
 *
 * This is a basic unit test of Jasmine. There is a test for each function.
 * If the functions contained conditions, there would be more tests for each public function.
 *
 * @license MIT
 * @author Alessandra Bilardi <alessandra.bilardi@gmail.com>
 * @see https://github.com/bilardi/javascript-prototype for details
 */

describe("MySimpleObject", function() {
    describe("when it is initialized", function(){
        it("should be able to create it", function() {
            myObject = new MySimpleObject();
            expect(myObject).toEqual(jasmine.objectContaining({}));
        });
        it("should be able to initialize bar to default value", function() {
            myObject = new MySimpleObject();
            expect(myObject).toEqual(jasmine.objectContaining({"bar":true}));
        });
        it("should be able to initialize bar with true value", function() {
            myObject = new MySimpleObject(true);
            expect(myObject).toEqual(jasmine.objectContaining({"bar":true}));
        });
        it("should be able to initialize bar with false value", function() {
            myObject = new MySimpleObject(false);
            expect(myObject).toEqual(jasmine.objectContaining({"bar":false}));
        });
    });
 
    describe("when getBar is called", function(){
        it("should be able to get bar value", function() {
            myObject = new MySimpleObject();
            expect(myObject.getBar()).toBe(true);
            myObject = new MySimpleObject(true);
            expect(myObject.getBar()).toBe(true);
            myObject = new MySimpleObject(false);
            expect(myObject.getBar()).toBe(false);
        });
    });
});
