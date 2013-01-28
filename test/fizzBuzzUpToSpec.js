(function (angular) {
    "use strict";

    describe("fizzBuzzUpTo", function () {

        var fizzBuzz;

        beforeEach(function () {
            fizzBuzz = jasmine.createSpy('fizzBuzz');

            /*
             * We need to be able to inject a spy for our fizzBuzz function.
             * Create a test module that depends on the module of our instance under test, then
             * associate our spy with it.
             */
            angular.module('testModule', ['fizzBuzz.fizzBuzzUpTo'])
                .value('fizzBuzz', fizzBuzz);

            module('testModule');
        });

        it("when given 1, should return the result fizzBuzz(1)", inject(function (fizzBuzzUpTo) {
            fizzBuzz.andReturn('actual');
            var actual = fizzBuzzUpTo(1);

            expect(fizzBuzz).toHaveBeenCalledWith(1);
            expect(actual).toBe('actual');
        }));

        it("when given 2, should return the result of fizzBuzz(1), then \\n, then fizzBuzz(2)", inject(function (fizzBuzzUpTo) {
            fizzBuzz.andReturn('actual');
            var actual = fizzBuzzUpTo(2);

            expect(fizzBuzz).toHaveBeenCalledWith(1);
            expect(fizzBuzz).toHaveBeenCalledWith(2);
            expect(actual).toBe('actual\nactual');
        }));

    });

}(window.angular));