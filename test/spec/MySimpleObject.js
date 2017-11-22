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
    });
});
