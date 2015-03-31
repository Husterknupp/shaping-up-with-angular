(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = [
		{
			name: "Dodecahedron",
			price: 2.95,
			description: "Bacon ipsum dolor amet in ad bresaola, biltong capicola leberkas ball ...",
			canPurchase: true,
			soldOut: false,
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: "It has five edges!",
			canPurchase: false,
			soldOut: false,
		}
	]
})();
