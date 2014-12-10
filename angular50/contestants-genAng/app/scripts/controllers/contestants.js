/**
 * Created by john on 12/9/14.
 */
angular.module("contestantsGenAngularApp")
    .controller('ContestantsCtrl', function() {
    this.contestants = [
        {firstName: "Rachel", lastName: "Washington"},
        {firstName: "Joshua", lastName: "Foster"},
        {firstName: "Samuel", lastName: "Walker"},
        {firstName: "Phyllis", lastName: "Reynolds"}
    ];

    })
    .controller("ContestantsEditorCtrl", function($scope) {
        this.contestant = {};
        this.save = function() {
            // this is an example of old issue of magically having access to parent controller
            $scope.ctrl.contestants.push(this.contestant);
            this.contestant = {};

        };
    });