(function (angular) {
    "use strict";
    var module = angular.module('fizzBuzz.fizzBuzzUpTo', ['fizzBuzz.fizzBuzz']);

    module.factory("fizzBuzzUpTo", [
        "fizzBuzz",
        function (fizzBuzz) {
            return function fizzBuzzUpTo(n) {
                var i = 2,
                    result = fizzBuzz(1);
                while (i <= n) {
                    result += '\n';
                    result += fizzBuzz(i);
                    i = i + 1;
                }
                return result;
            };
        }
    ]);

}(window.angular));