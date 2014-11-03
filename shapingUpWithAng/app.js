/**
 * Created by john on 10/28/14.
 */

(function() {

var app = angular.module('gemStore', []);

    app.controller('GalleryController', function() {

        this.current = 0;
        this.setCurrent = function(newCurrent) {
            this.current = newCurrent || 0;

        };

    });

    app.directive('productTabs', function() {

        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function() {
                this.tab = 1;
                // function that alters tab when clicked
                this.setTab = function(tabValue) {
                    this.tab = tabValue;
                };
                this.isSetTo = function(checkTab) {

                    return this.tab === checkTab;

                };
            },
        };

    });




})();