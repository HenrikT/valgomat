angular.module('valgomat')
    .service('answers', function() {
        var answers = {
            gender: "",
            age: "",
            party: "",
            county: "",
            municipality: "",
        }

            return {
            getAnswers: function() {
                return answers;
            }

        }
    });
