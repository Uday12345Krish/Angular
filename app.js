(function() {
    'use strict';

    angular.module('DinnerCheck', [])
        .controller('DinnerCheckController', DinnerCheckController);

    DinnerCheckController.$inject = ['$scope'];

    function DinnerCheckController($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkDinner = function() {
            if ($scope.dishes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arrayDishes = $scope.dishes.split(',');
                var arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
                    return v.trim() !== '';
                });

                if (arrayDishesWithoutEmptys.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();
