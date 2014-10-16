//  <product-tabs></product-tabs> is what is seen in the main index.html

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

