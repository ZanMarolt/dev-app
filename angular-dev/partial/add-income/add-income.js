angular.module('personalApp').controller('AddIncomeCtrl',function($scope, $http){

    $scope.postIncome = function(){
        var data = $scope.income;
        $http.post("/api/income", data)
            .then(function(res){
                console.log(res);
                if(res.status === 200){
                    $scope.income = {};
                    console.log('OK!');
                }
            });

    };

    $scope.dateOptions = {
        changeYear: true,
        changeMonth: true,
        yearRange: '1900:-0'
    };


});
