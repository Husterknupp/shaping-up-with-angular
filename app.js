(function () {
    var app = angular.module('store', []);

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function (selectTab) {
            this.tab = selectTab;
        }

        this.isSelected = function (checkTab) {
            this.tab === checkTab;
        };
    });

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: "Bacon ipsum dolor amet in ad bresaola, biltong capicola leberkas ball ...",
            canPurchase: true,
            soldOut: false,
            image: "bacon01.jpg"
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "It has five edges!",
            canPurchase: false,
            soldOut: false,
            image: "bacon02.jpg"
        }
    ]
})();
