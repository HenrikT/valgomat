angular.module('valgomat')
    .factory('ages', function () {
        var ages = [
            {
                cat: "0 - 18"
            },
            {
                cat: "19 - 25"
            },
            {
                cat: "26 - 35"
            },
            {
                cat: "36 - 45"
            },
            {
                cat: "46 - 55"
            },
            {
                cat: "56 - 65"
            },
            {
                cat: "66 - 75"
            },
            {
                cat: "76+"
            }
        ];


        return {
            getAges: function () {
                return ages;
            }
        }
    });
