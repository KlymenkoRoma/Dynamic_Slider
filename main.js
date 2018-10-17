let sliderApp = angular
    .module('sliderApp', [])
    .controller('sliderAppCtrl', ($scope, $http, $interval) => {
        $scope.currNumber = 1;

        $interval(() => {
            $http.get('/randomNumber').then((response) => {
                $('.slider').slick('slickGoTo', response.data);
                $scope.currNumber = +response.data + 1;
            });
        }, 2000);
    });

$(() => {
    $('.slider').slick({
        arrows: false,
        centerMode: true,
        variableWidth: true
    });
});