/**
 * Test helper of MyHelper
 *
 * This is a basic unit test of Jasmine. There is a test for each function.
 * If the functions contained conditions, there would be more tests for each public function.
 *
 * @license MIT
 * @author Alessandra Bilardi <alessandra.bilardi@gmail.com>
 * @see https://github.com/bilardi/javascript-prototype for details
 */

describe("setBar", function() {
    describe("when setBar is used", function(){
        it("should be able to set bar variable", function() {
            expect(bar).toBe(true);
            setBar(true);
            expect(bar).toBe(true);
            setBar(false);
            expect(bar).toBe(false);
        });
    });
});
