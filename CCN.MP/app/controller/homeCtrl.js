app.controller('homeCtrl', ['$scope', 'instance', 'windowService', '$location', 'httpService', '$http', function ($scope, instance, windowService, $location, httpService, $http) {
    var home={

    };
    home.isPopShow=false;
    $scope.home = home;
} ]);