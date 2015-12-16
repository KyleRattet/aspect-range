var app = angular.module("MyApp", ["wijmo"]);
    function MyController($scope) {

        $scope.propsStart = {
          valueStart: 0,
          valueEnd: 0,
          max:360,
          min: 0,
          isUpdating:true,
          ranges: {
              one: { min: 0, max: 90, color: 'yellow' },
              two: { min: 90, max: 180, color: 'orange' },
              three: { min: 180, max: 270, color: 'red' },
              four: { min: 270, max: 360, color: 'gray' }
          },
          labels: {
              one: "Hi"
          },

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
