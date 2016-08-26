/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav,$scope) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.toggleList   = toggleUsersList;
  $scope.myvalue = false;
  $scope.myvalue2 = false;
  $scope.myvalue3 = false;
  $scope.problems = false;
  $scope.node1 = true;
  $scope.node2 = true;
  $scope.node3 = true;

  // Load all registered users


  UsersDataService
        .loadAllUsers()
        .then( function( users ) {
          self.users    = [].concat(users);
          self.selected = users[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( user ) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }
  $scope.showAlert = function(){
    $scope.myvalue = true;
    $scope.myvalue2 = false;
    $scope.myvalue3 = false;
    $scope.problems = false;
  };

  $scope.showAlert2 = function(){
    $scope.myvalue2 = true;
    $scope.myvalue = false;
    $scope.myvalue3 = false;
    $scope.problems = false;

  };

  $scope.alertaa = function(){
    $scope.myvalue2 = false;
    $scope.myvalue = false;
    $scope.myvalue3 = true;
    $scope.problems = false;

  };


  $scope.showAlert3 = function(){
    $scope.myvalue3 = true;
    $scope.myvalue2 = false;
    $scope.myvalue = false;
    $scope.problems = false;

  };

  $scope.goToProblems = function(){
    $scope.problems = !$scope.problems;
  };

  $scope.closenode1 = function(){
    $scope.node1 = false;
  };

  $scope.closenode2 = function(){
    $scope.node2 = false;
  };

  $scope.closenode3 = function(){
    $scope.node3 = false;
  };



}
export default [ 'UsersDataService', '$mdSidenav', '$scope',AppController ];

