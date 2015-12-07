
angularFormsApp.controller('efController',
    function ($scopem ,efService) {

        $scope.employee = efService.employee;

    });