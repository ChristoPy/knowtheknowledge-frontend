export default {

	IsLoggedIn () {

		return localStorage.getItem ("u") && localStorage.getItem ("t");
	},

	GoToFeedIfLoggedIn (To, From, Next, Fallback) {

		if (this.IsLoggedIn ()) {

			Next ("/feed");
		}
		else {

			Next ();
		}
	},

	GoToLogIn (To, From, Next) {

		if (this.IsLoggedIn ()) {

			Next ("/login");
		}
		else {

			Next ();
		}
	}
}