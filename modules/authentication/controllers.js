﻿'use strict';

angular.module('Authentication')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password, response.data);
                    $location.path('/');
                } else {
                    //$scope.error = response.message;
                    $scope.error = "Username or password is incorrect";
                    $scope.dataLoading = false;
                }
            });
        };
    }]);