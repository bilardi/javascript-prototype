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

    describe("when baz is used", function(){
        it("should be able to return a random boolean", function() {
            var boolean = myObject.baz();
            expect(boolean).toEqual(new Boolean(boolean));
        });
    });

    describe("when foo is used", function(){
        it("should be able to get the reverse boolean", function() {
            expect(myObject.foo(true)).toBe(false);
            expect(myObject.foo(false)).toBe(true);
        });
    });

    describe("when foobar is used", function(){
        it("should be able to get a reverse boolean of that set", function() {
            myObject = new MySimpleObject();
            expect(myObject.foobar()).toBe(false);
            myObject = new MySimpleObject(true);
            expect(myObject.foobar()).toBe(false);
            myObject = new MySimpleObject(false);
            expect(myObject.foobar()).toBe(true);
        });
    });
});
