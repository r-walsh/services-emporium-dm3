angular.module( 'emporium' )
.factory( 'itemFactory', function() {
	var items = [
		{
			name: 'rotten log'
			, description: 'read the name dummy'
			, price: 14.99
			, featured: true
			, inStock: false
		}
		, {
			name: 'slightly used tissue'
			, description: 'some wear and tear'
			, price: 36.22
			, featured: true
			, inStock: true
		}
		, {
			name: 'ryan\'s personal phone number'
			, description: 'i probably won\'t answer anyway'
			, price: 99.99
			, featured: false
			, inStock: true
		}
		, {
			name: 'dm2\'s collective tears about toy problems'
			, description: 'could solve california\'s drought'
			, price: .99
			, featured: true
			, inStock: true
		}
	];

	return {
		getItems: function() {
			return items.slice();
		},

		addItem: function( newItem ) {
			newItem.featured = false;
			newItem.inStock = true;

			items.push( newItem );
		}
	}
} );