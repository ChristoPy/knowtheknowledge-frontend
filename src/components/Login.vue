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
					<div class="card">
						<h2 class="card-title text-center">Login</h2> 

						<form class="form card-body" method="" action="">
							<div class="form-group bmd-form-group">
								<div class="input-group">
									<div class="input-group-prepend mt-2">
										<span class="input-group-addon">
											<i class="fa fa-envelope"></i>
										</span>
									</div>
									
									<input type="text" class="form-control" placeholder="Email..." v-model="Email">
								</div>
							</div>

							<div class="form-group bmd-form-group">
								<div class="input-group">
									<div class="input-group-prepend mt-2">
										<span class="input-group-addon">
											<i class="fa fa-lock"></i>
										</span>
									</div>
									
									<input type="password" placeholder="Password..." class="form-control" v-model="Password">
								</div>
							</div>

							<div class="text-center">
								<a href="#" class="btn btn-primary btn-round" @click="TryLogin (Email, Password)">Login</a>
							</div>
						</form>

						<div class="card-footer mr-auto ml-auto mt-2">
							<a href="/signup">Create Account</a>
						</div>
					</div>

					<div class="alert alert-danger text-center" role="alert" v-if="ErrorName">
						{{ErrorName}}
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: "Login",
		data () {

			return {
				Email: "",
				Password: "",
				ErrorName: undefined
			}
		},
		methods: {

			TryLogin: function (Email, Password) {

				this.ErrorName = undefined;

				const ME = this;

				let Logged = false;

				$.post ("https://knowapi-knowapi.wedeploy.io/knowapi/v1/login", 
					{email: Email, password: Password})
					.always (function (Response) {

						const JSONResponse = Response.responseJSON;

						if (JSONResponse && JSONResponse["msg_err"]) {

							ME.CheckErrors (JSONResponse["msg_err"]);
						}
						else {

							localStorage.setItem ("u", Response.user);
							localStorage.setItem ("t", Response.token);

							ME.$router.push ("/feed");
						}
				});
			},

			CheckErrors (ErrorMessage) {

				const Errors = {
					"INEXISTENT-USER": "That user does not exists",
					"INVALID-PASSWORD": "Oops, password is not valid!"
				};

				const ErrorsNames = Object.keys (Errors);
				const ErrorsValues = Object.values (Errors);

				ErrorsValues.map (Value => {

					if (ErrorMessage === Value) {

						this.ErrorName = Value;
					}
				});
			}
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