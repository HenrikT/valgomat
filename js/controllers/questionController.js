angular.module('valgomat')
    .controller('questionController', function ($scope, answers, questions, ages, parties, counties, genders, $routeParams) {

		$scope.questionId = $routeParams.pageId - 6;

        //Define services
        $scope.genders = genders.getGenders();
        $scope.ages = ages.getAges();
        $scope.counties = counties.getCounties();
        $scope.parties = parties.getParties();
        $scope.questions = questions.getQuestions();
        $scope.answers = answers.getAnswers();

        var calculateResult = function () {
			var result = {
                "p_ap": 0,
                "p_frp": 0,
                "p_h": 0,
                "p_krf": 0,
                "p_mdg": 0,
                "p_r": 0,
                "p_sp": 0,
                "p_sv": 0,
                "p_v": 0,
                "p_andre": 0
            };

            console.log($scope.questions);
            $scope.questions.forEach(function (element, index, array) {
                result[element.party] += element.importance;
            })
            console.log(result);
            presentGraph(result);
			
			sendResultToServer(result, $scope.answers);
        }

        if ($scope.pageId == 26) {
            calculateResult();
        }

        function presentGraph(result) {
            var dataPoints = [];
            for (var i = 0; i < Object.keys(result).length; i++) {
                dataPoints.push(result[Object.keys(result)[i]]);
            }
            var dataPointsMin = Math.min.apply(Math, dataPoints);

            for (var i = 0; i < dataPoints.length; i++) {
                dataPoints[i] = dataPoints[i] + Math.abs(dataPointsMin);
            }
            console.log(dataPoints);

            var data = {
			labels: ["Arbeiderpartiet", "Fremskrittspartiet", "Høyre", "Kristelig Folkeparti", "Mijøpartiet De Grønne", "Rødt", "Senterpartiet", "Sosialistisk Venstreparti", "Venstre", "Andre"],
                datasets: [
                    {
                        label: "Resultater",
                        fillColor: "rgba(220,220,220,0.5)",
                        strokeColor: "rgba(214,0,0,0.8)",
                        highlightFill: "rgba(220,220,220,0.75)",
                        highlightStroke: "rgba(0,0,0,1)",
                        data: dataPoints
                    }
                ]
            };


            var ctx = document.getElementById("resultsChart").getContext("2d");
            var myNewChart = new Chart(ctx).Bar(data);
        }

        function sendResultToServer(result, answers) {
			var requestData = {"results": result, "answers": answers};
            $.ajax({
					  method: "POST",
					  url: "save_results.php",
					  data: requestData
					})
					  .done(function(data) {
						  
					  });

        }
    });