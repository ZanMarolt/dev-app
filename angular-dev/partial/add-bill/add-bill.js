angular.module('personalApp').controller('AddBillCtrl',function($scope, $http){
    $scope.postBill = function(){
        var data = $scope.bill;
        $http.post("/api/bill", data)
            .then(function(res){
                console.log(res);
                if(res.status === 200){
                    $scope.bill = {};
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
