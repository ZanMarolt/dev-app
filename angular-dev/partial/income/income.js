angular.module('personalApp').controller('IncomeCtrl',function($scope, $http, $state){

    $scope.list = [];

    $scope.getIncome = function(cb){
        $http.get('/api/income')
            .then(function(res){

                var list = res.data;
                $scope.list = list;
                console.log(list);

                if(cb) {
                    cb(list);
                }

            });
    };

    $scope.deleteIncome = function(id, cb){

        $http.delete('/api/income/'+id)
            .then(function(res){

                if(cb) {
                    cb(res);
                }
                if(res.status === 200){
                    angular.forEach($scope.list, function(income, index){

                        if(income._id === id){
                            $scope.list.splice(index,1);
                            $scope.calculateCash();
                        }

                    });
                }

            });

    };

    $scope.createIncome = function(){

        $state.go('add-income');

    };

    $scope.calculateCash = function(){
        console.log('Calculate Cash function fired!'+$scope.list.length);

        var combinedCash = 0;

        for(var i=0;i<$scope.list.length;i++){
            combinedCash = combinedCash + $scope.list[i].price;
            $scope.combinedCash = combinedCash;
        };

    };

    $scope.getIncome(function(){
        $scope.calculateCash();
    });

});
