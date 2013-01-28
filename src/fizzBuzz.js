(function (angular) {
    "use strict";

    // Create an Angular module. Change the module's name as appropriate.
    var module = angular.module('fizzBuzz.fizzBuzz', []);

    // Create a service.  We can get this from our test using injection.
    module.factory("fizzBuzz", function () {
        return function (n) {
            if (n % 3 === 0 && n % 5 === 0) {
                return 'FizzBuzz';
            }

            if (n % 3 === 0) {
                return 'Fizz';
            }

            if (n % 5 === 0) {
                return 'Buzz';
            }

            return n.toString();
        };
    });

}(window.angular));
