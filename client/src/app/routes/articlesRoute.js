App.ArticlesRoute = App.AuthenticatedRoute.extend({
    model: function () {
        return this.getJSONWithToken('/articles.json');
    }
});