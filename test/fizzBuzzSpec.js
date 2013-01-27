(function () {
    "use strict";

    describe("fizzBuzz", function () {

        beforeEach(module('kata.fizzBuzz'));

        it("should return 1 when given 1", inject(function (fizzBuzz) {
            expect(fizzBuzz(1)).toBe(1);
        }));

        it("should return 2 when given 2", inject(function (fizzBuzz) {
            expect(fizzBuzz(2)).toBe(2);
        }));

        it("should return 'Fizz' when given 3", inject(function (fizzBuzz) {
            expect(fizzBuzz(3)).toBe('Fizz');
        }));

        it("should return 'Buzz' when given 5", inject(function (fizzBuzz) {
            expect(fizzBuzz(5)).toBe('Buzz');
        }));

        it("should return 'FizzBuzz' when given 15", inject(function (fizzBuzz) {
            expect(fizzBuzz(15)).toBe('FizzBuzz');
        }));

    });

}());