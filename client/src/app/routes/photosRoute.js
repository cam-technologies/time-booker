(function() {
	App.PhotosRoute = App.AuthenticatedRoute.extend({
	    model: function() {
	        return this.getJSONWithToken('/photos.json');
	    }
	});
})();