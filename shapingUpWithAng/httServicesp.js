(function() {

    var app = angular.module('gemStore', ['store-directives']); // store-directives was changed from store-products

    app.controller('StoreController', ['$http', function($http){
    var store = this;

        $http.get('store-products.json').success(function(data) {

            this.products = data;
        })

    }]);





})();