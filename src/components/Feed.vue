<template>
	<div class="container">
		<div class="row">
			<div class="col-md-10 ml-auto mr-auto">

				<div v-for="Post of Posts" class="card">
					<div class="card-body">
						<h3 class="card-title text-center title">
							{{Post.title}}
						</h3>

						<h5 class="text-center">
							By: <a href="#">{{Post.user}}</a>
						</h5>

						<p class="card-description text-center">
							{{Post.postMessage}}
						</p>


						<div class="card-text">
							<i class="fas fa-calendar-alt"></i>
							<small class="text-muted ml-1">{{Post.createdAt}}</small>
						</div>
					</div>

				</div>

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

						const JSONResponse = Response.responseJSON;

						if (JSONResponse && JSONResponse["msg_err"]) {

							ME.CheckErrors (JSONResponse["msg_err"]);
						}
						else {

							ME.Posts = Response.posts;
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

						window.sessionStorage.clear ();

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