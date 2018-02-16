import Vue from "vue";
import Router from "vue-router";
import Auth from "../Auth";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";

Vue.use (Router);

export default new Router ({
	routes: [
		{
			path: "/login",
			name: "Login",
			component: Login,
			beforeEnter (To, From, Next) {

				Auth.CheckToken (To, From, Next, "/");
			}
		},
		{
			path: "/signup",
			name: "SignUp",
			component: SignUp,
			beforeEnter (To, From, Next) {

				Auth.CheckToken (To, From, Next, "/");
			}
		}
	],
	mode: "history"
});