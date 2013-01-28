(function () {
    "use strict";

    describe("Acceptance Spec", function () {

        beforeEach(module('fizzBuzz.fizzBuzzUpTo'));

        it("when given 20, should return the result fizzBuzz(1) through fizzBuzz(20), separated by new lines", inject(function (fizzBuzzUpTo) {
            var actual = fizzBuzzUpTo(20);
            expect(actual).toBe("1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz");
        }));

    });

}());