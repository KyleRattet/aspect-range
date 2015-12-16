var app = angular.module("MyApp", ["wijmo"]);

    function MyController($scope) {

        $scope.compass = {
          start: 0,
          end: 0,
          max:360,
          min: 0
        };

        $scope.directions = [
          {name: "North", value: "0"},
          {name: "Northeast", value: "45"},
          {name: "East", value: "90"},
          {name: "Southeast", value: "135"},
          {name: "South", value: "180"},
          {name: "Southwest", value: "225"},
          {name: "West", value: "270"},
          {name: "Northwest", value: "315"},
        ];
    }
