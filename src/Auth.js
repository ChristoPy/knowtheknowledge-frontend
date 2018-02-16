export default {

	CheckToken (To, From, Next, Fallback) {

		if (window.sessionStorage.u && window.sessionStorage.t) {

			Next ("/");
		}
		else {

			Next ();
		}
	}
}