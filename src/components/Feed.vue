<template>
	<div class="container">
		<div class="row">
			<div class="col-md-10 ml-auto mr-auto">

					<div v-for="Post of Posts" class="card">

						<ion-item>
							{{Post}}
						</ion-item>

					</div>

<!-- 				<div class="card">
					<h2 class="card-title text-center">Welcome</h2> 
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Feed",
		data () {

			return {
				Posts: []
			}
		},
		methods: {

			TryGetAllPosts () {

				const ME = this;

				$.ajaxSetup ({
					headers:{
					"Authorization": `Bearer ${window.sessionStorage.t}`
					}
				});

				$.get ("https://knowapi-knowapi.wedeploy.io/knowapi/v1/getposts", 
					{})
					.always (function (Response) {

						console.log (Response);

						const JSONResponse = Response.responseJSON;

						if (JSONResponse && JSONResponse["msg_err"]) {

							ME.CheckErrors (JSONResponse["msg_err"]);
						}
						else {

							this.Posts = Response.posts;
						}
				});
			},

			CheckErrors (ErrorMessage) {

				const Errors = {
					"WRONG-TOKEN": "Error: Token",
					"BROKEN-TOKEN": "Token malformated",
					"EXPIRED-TOKEN": "ESTA MERDA NÃO BATEU VLW?"
				};

				const ErrorsNames = Object.keys (Errors);
				const ErrorsValues = Object.values (Errors);

				ErrorsValues.map (Value => {

					if (ErrorMessage === Value) {

						window.sessionStorage.t = undefined;
						window.sessionStorage.k = undefined;

						this.$router.push ("/login");
					}
				});
			}
		},

		created: function () {

			this.TryGetAllPosts ();
		}
	}
</script>

<style></style>