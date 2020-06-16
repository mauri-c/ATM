'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope','$cookieStore','$http',
    function ($scope,$cookieStore,$http) {
        $scope.GetToken = function () {
            alert($cookieStore.get('token'));
        },
        $scope.checkboxModel = {
            street: true,
            housenumber: true,
            postalcode: true,
            city: true,
            lat: true,
            lng: true,
            distance: true,
            type: true,
          };
        $scope.advanced = function() {
            var checkbox = $scope.checked;
            var checkElem = $scope.checkelement;
          
            expect(checkElem.isDisplayed()).toBe(false);
            checkbox.click();
            expect(checkElem.isDisplayed()).toBe(true);},

        $scope.GetATM = function () {        
            var url = `http://vps-1575977-x.dattaweb.com:8080/atscom/atm?q=${
                        $scope.busqueda}&fields=${
                        $scope.checkboxModel.street?"street,":""}${
                        $scope.checkboxModel.housenumber?"housenumber,":""}${
                        $scope.checkboxModel.postalcode?"postalcode,":""}${
                        $scope.checkboxModel.city?"city,":""}${
                        $scope.checkboxModel.lat?"lat,":""}${
                        $scope.checkboxModel.lng?"lng,":""}${
                        $scope.checkboxModel.distance?"distance,":""}${
                        $scope.checkboxModel.type?"type":""}`;     
            $http({
                method: 'GET',              
                url: url,               
                headers : {
                    "Content-Type":"application/json",
                    "Authorization" : $cookieStore.get('token')
                }              
                }).then(function success(response) {
                    $scope.atms = response.data;
                    //alert(angular.toJson(response.data));                     
                }, function error(response) {        
                    alert('error');               
                });

        
            }
    }]);

    