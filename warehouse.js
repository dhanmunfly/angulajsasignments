// ****************** warehouse **********
app.controller("Warehouse", function($scope, itemService) {
  $scope.counter = 0;
  // JSON ARRAY TO POPULATE TABLE.
  $scope.warehouse = itemService.wherehouseitem;

  var items1 = itemService.item;
  var warehouse1 = itemService.wherehouseitem;
  var jarray = warehouse1.map(function(item, i) {
    return [item, [items1[i]]];
  });
  //var children = items1.concat(warehouse1);
  $scope.warehouse2 = jarray;
  // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
  $scope.addRow = function() {
    if ($scope.name != undefined && $scope.address != undefined) {
      var items1 = [];
      items1.name = $scope.name;
      items1.address = $scope.address;

      $scope.warehouse.push(items1);

      // CLEAR TEXTBOX.
      $scope.name = null;
      $scope.address = null;
    }
  };

  $scope.removeRow = function(index) {
    // remove the row specified in index
    $scope.warehouse.splice(index, 1);
    // if no rows left in the array create a blank array
    if ($scope.warehouse.length() === 0) {
      $scope.warehouse = [];
    }
  };

  $scope.ShowHide = function() {
    $scope.IsVisible = $scope.IsVisible = true;
  };

  $scope.Showitem = function(index, inc) {
    $scope.counter += inc;
    $scope.itemname = $scope.itemname = true;
    $scope.itemnamenot = $scope.itemnamenot = true;

    if ($scope.counter == 2) {
      $scope.itemname = $scope.itemname = false;
      $scope.itemnamenot = $scope.itemnamenot = false;
      $scope.counter = 0;
    }
  };
  $scope.update = function(index, data) {
    $scope.items[index] = data;
  };

  $scope.Showjson = function(index, va) {
    $scope.json = $scope.json = true;
    $scope.warehouse3 = $scope.warehouse2[index];
  };
});
