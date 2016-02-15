angular.module('personalApp').controller('BillsCtrl',function($scope, $http, $state){

    $scope.list = [];

    $scope.getBills = function(cb){
        $http.get('/api/bill')
            .then(function(res){

                var list = res.data;
                $scope.list = list;
                console.log(list);

                if(cb) {
                    cb(list);
                }

            });
    };

    $scope.deleteBill = function(id, cb){

        $http.delete('/api/bill/'+id)
            .then(function(res){

                if(cb) {
                    cb(res);
                }
                if(res.status === 200){
                    angular.forEach($scope.list, function(bill, index){

                        if(bill._id === id){
                            $scope.list.splice(index,1);
                        }

                    });
                }

            });

    };

    $scope.createBill = function(){

        $state.go('add-bill');

    };

    $scope.getBills();
});
