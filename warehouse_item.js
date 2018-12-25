app.controller("Warehouse_item", function($scope, itemService) {
  // JSON ARRAY TO POPULATE TABLE.
  var items1 = itemService.witem;
  //var children = items1.concat(warehouse1);
  $scope.warehouse = items1;
  // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
  $scope.addRow = function() {
    if (
      $scope.name != undefined &&
      $scope.nameq != undefined &&
      $scope.q != undefined
    ) {
      var warehouse1 = [];
      warehouse1.name = $scope.name;
      warehouse1.nameq = $scope.nameq;
      warehouse1.q = $scope.q;

      $scope.warehouse.push(warehouse1);

      // CLEAR TEXTBOX.
      $scope.name = null;
      $scope.nameq = null;
      $scope.q = null;
    }
  };
  $scope.update = function(index, data) {
    $scope.warehouse[index] = data;
  };
});
