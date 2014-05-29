App.LoginController = Ember.Controller.extend({
    actions: {
        login: function () {
            var self = this,
                data = this.getProperties('username', 'password');
            // Clear out any error messages.
            this.set('errorMessage', null);

            $.post('/auth.json', data).then(function (response) {

                self.set('errorMessage', response.message);
                if (response.success) {
                    alert('Login succeeded!');
                    self.set('token', response.token);

                    var attemptedTransition = self.get('attemptedTransition');
                    if (attemptedTransition) {
                        attemptedTransition.retry();
                        self.set('attemptedTransition', null);
                    }
                    else {
                        // Redirect to 'articles' by default.
                        self.transitionToRoute('articles');
                    }
                }
            });
        }
    },
    reset: function () {
        this.setProperties({
            username: '',
            password: '',
            errorMessage: ''
        });
    },

    token: localStorage.token,
    tokenChanged: function () {
        localStorage.token = this.get('token');
    }.observes('token')
});