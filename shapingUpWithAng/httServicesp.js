(function() {

    var app = angular.module('gemStore', ['store-directives']); // store-directives was changed from store-products

    app.controller('StoreController', ['$http', function($http){
    var store = this;
        store.products = [];

        $http.get('store-products.json').success(function(data) {

            store.products = data;
        })

    }]);





})();