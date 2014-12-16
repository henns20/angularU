/**
 * Created by john on 12/15/14.
 */
angular.module("myApp", [])
    .directive('mainForm', function() {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'app/views/form1.html',
            controller: 'MainFormCtrl',
            bindToController: true
        };
    }).controller('MainFormCtrl', function() {
        this.formTest = "testing the form, directive, and controller";
    });