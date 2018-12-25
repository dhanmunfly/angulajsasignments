var app = angular.module("myShoppingList", []);

app.service("itemService", function() {
  this.item = [
    { name: "iMac", price: "$1500", q: "440" },
    { name: "iPad", price: "$500", q: "550" },
    { name: "iPhone", price: "$600", q: "450" }
  ];

  this.wherehouseitem = [
    { name: "New york", address: "11 eve 10 st NY" },
    { name: "jeresey city", address: "11 eve 10 st NY" }
  ];
  this.witem = [
    { name: "New york", nameq: "iMac", q: "440" },
    { name: "jeresey city", nameq: "iPad", q: "550" }
  ];
});

app.controller("Items", function($scope, itemService) {
  $scope.counter = 0;
  // JSON ARRAY TO POPULATE TABLE.
  $scope.items = itemService.item;

  // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
  $scope.addRow = function() {
    if ($scope.name != undefined && $scope.price != undefined) {
      var items1 = [];
      items1.name = $scope.name;
      items1.price = $scope.price;

      $scope.items.push(items1);

      // CLEAR TEXTBOX.
      $scope.name = null;
      $scope.price = null;
    }
  };

  $scope.removeRow = function(index) {
    // remove the row specified in index
    $scope.items.splice(index, 1);
    // if no rows left in the array create a blank array
    if ($scope.items.length() === 0) {
      $scope.items = [];
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
});
