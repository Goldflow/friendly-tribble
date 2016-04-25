app.controller('controller', function ($scope, calculatorService, $http) {
    $scope.factor1 = 0;

    $scope.factor2 = 0;
    $scope.sum = 0;

    //watch functie
    //om de 2 milliseconden gaat angular loopen over alle watch-ables
    $scope.getSum = function () {
            console.log('summing ...');
            $scope.sum = calculatorService.calculate($scope.factor1, $scope.factor2);
            //$scope.factor2 = 
        }
        //hiern gaan we de response van de geladen data insteken
        //$scope.data = "";
        //
        //*

    $scope.loadData = function () {

        //something wrong here
        function createForeCastViewModel(entity) {
            return {
                description: entity.weather[0].description
                , date: moment(entity.di).format("DD MM YYYY HH:mm")
            }
        }

        function onLoadSucess(response) {
            //$scope.data = response.data.list;
            //we maken nu een lambda expression - komt overen met soort van select query
            $scope.forecasts = response.data.list.map(function (li) {
                return {
                    description: li.weather[0].description
                    , date: moment(li.dt).format("DD MM YYYY HH:mm")
                }
            });
        };

        function onLoadFailure(response) {
            console.log(response.data);
        };

        //bij de functie loadData op te roepen, proberen we de open weather map te kijken
        //wat het weer isin Brussel momenteel
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=Brussels&appid=6441bfafc9de09c3e3425c8283e96726')
            //het kan even duren, maar na een bepaalde wachttijd/delay krijgen we een response:
            //in het geval dat we succesvole response hebben, gaan we die ons data object steken
            .then(onLoadSucess)
            //in het geval we geen succesvolle response hebben, gaan we die printen in console
            .catch(onLoadFailure);
    }


    //*/





});