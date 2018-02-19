<template>
	<main>
		<nav class="navbar fixed-top navbar-expand-lg bg-success">
			<div class="container">
				<div class="navbar-translate">
					<a class="navbar-brand" href="#">
						<img src="../assets/K.png" class="Logo image-fluid">
					</a>
				</div>
			</div>
		</nav>

		<div class="container" id="MainContent">
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
	</main>
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
					"Authorization": `Bearer ${localStorage.getItem ("t")}`
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

						localStorage.removeItem ("u");
						localStorage.removeItem ("t");

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

<style scoped>

.Logo {

	width: 50px;
	height: 50px;
	margin-top: -10px;
}

#MainContent {

	position: relative;
	margin-top: 70px;
}

</style>