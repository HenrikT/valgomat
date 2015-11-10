angular.module('valgomat')
    .service('genders', function () {
        var genders = [
            {
                name: "Mann"
            },
            {
                name: "Kvinne"
            },

        ];

        return {
            getGenders: function () {
                return genders;
            }

        }

    });