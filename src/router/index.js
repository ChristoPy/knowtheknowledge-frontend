import Vue from "vue";
import Router from "vue-router";
import Auth from "../Auth";
import Feed from "@/components/Feed";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";

Vue.use (Router);

export default new Router ({
	routes: [
		{
			path: "/feed",
			name: "Feed",
			component: Feed
		},
		{
			path: "/login",
			name: "Login",
			component: Login,
			beforeEnter (To, From, Next) {

				Auth.GoToFeedIfLoggedIn (To, From, Next);
			}
		},
		{
			path: "/signup",
			name: "SignUp",
			component: SignUp,
			beforeEnter (To, From, Next) {

				Auth.GoToFeedIfLoggedIn (To, From, Next);
			}
		}
	],
	mode: "history"
});