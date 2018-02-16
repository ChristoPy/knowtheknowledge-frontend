export default {

	CheckToken (To, From, Next, Fallback) {

		if (window.sessionStorage.u && window.sessionStorage.t) {
			console.log ("kkkk")
			Next ("/");
		}
		else {
			console.log ("oooooo")
			Next ();
		}
	}
}