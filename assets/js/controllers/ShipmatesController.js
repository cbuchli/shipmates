/**
 * Created by cbuchli on 09/07/15.
 */

app.controller('shipmatesController', ['$scope', function($scope) {
  $scope.vessels = $scope.vessels || [{'mates': []}];

  if (!io.socket.alreadyListeningToVessels) {
    io.socket.on('connect', function() {
      io.socket.get("/vessel", function(resData) {
        $scope.vessels = resData;
        $scope.$apply();
      });
    });
    io.socket.alreadyListeningToVessels = true;
    io.socket.on('vessel', function onServerSentEvent (msg) {

      console.log(msg);

      switch(msg.verb) {

        case 'created':
          $scope.vessels.push(msg.data);
          $scope.$apply();
          break;

        case 'addedTo':
        case 'updated':
            angular.forEach($scope.vessels, function(u, i) {
              if (u.id === msg.id ) {
                io.socket.get('/vessel/' + msg.id, function(resp) {
                  $scope.vessels[i] = resp;
                  $scope.$apply();
                });
              }
            });
          break;

        case 'destroyed':
            angular.forEach($scope.vessels, function(u, i) {
              if (u.id === msg.id ) {
                $scope.vessels.splice(i,1);
                $scope.$apply();
              }
            });
          break;

        default:
          return;
      }
    });
  }
}]);
