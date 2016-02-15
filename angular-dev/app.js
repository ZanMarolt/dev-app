angular.module('personalApp', ['ui.bootstrap','ui.utils','ui.router', 'ngAnimate', 'ui.date']);

angular.module('personalApp').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('add-bill', {
        url: '/add-bill',
        templateUrl: 'partial/add-bill/add-bill.html'
    });
    $stateProvider.state('bills', {
        url: '/bills',
        templateUrl: 'partial/bills/bills.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('personalApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
