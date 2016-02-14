angular.module('personalApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partial/add-bill/add-bill.html',
    "<div class=col-md-12 ng-controller=AddBillCtrl><div class=container><h3>Add a Bill</h3><label for=date>Pick a Date</label><input type=date id=date ng-model=bill.date><label for=price>Price</label><input type=number id=price step=any ng-model=bill.price><label for=description>Description</label><input type=text id=description ng-model=bill.description><div class=\"btn btn-success\" ng-click=postBill()>Add</div></div></div>"
  );

}]);
