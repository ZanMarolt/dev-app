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
                            console.log($scope.list);
                            $scope.calculateCash();
                        }

                    });
                }

            });

    };

    $scope.createBill = function(){

        $state.go('add-bill');

    };

    $scope.calculateCash = function(){
        console.log('Calculate Cash function fired!'+$scope.list.length);

        var combinedCash = 0;

        for(var i=0;i<$scope.list.length;i++){
            combinedCash = combinedCash + $scope.list[i].price;
            $scope.combinedCash = combinedCash;
        };

    };

    $scope.getBills(function(){
        $scope.calculateCash();
    });



});
