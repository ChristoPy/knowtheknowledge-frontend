<template>
	<div class="container">
		<div class="row">
			<div class="col-md-10 ml-auto mr-auto">
				<div class="card">
					<h2 class="card-title text-center">SignUp</h2> 

					<form class="form card-body" method="" action="">
						<div class="form-group bmd-form-group">
							<div class="input-group">
								<div class="input-group-prepend mt-2">
									<span class="input-group-addon">
										<i class="fa fa-user"></i>
									</span>
								</div>

								<input type="text" class="form-control" placeholder="First Name..." v-model="Name" required="">
							</div>
						</div>

						<div class="form-group bmd-form-group">
							<div class="input-group">
								<div class="input-group-prepend mt-2">
									<span class="input-group-addon">
										<i class="fa fa-envelope"></i>
									</span>
								</div>
								
								<input type="email" class="form-control" placeholder="Email..." v-model="Email" required="">
							</div>
						</div>

						<div class="form-group bmd-form-group">
							<div class="input-group">
								<div class="input-group-prepend mt-2">
									<span class="input-group-addon text-center">
										<i class="fa fa-lock"></i>
									</span>
								</div>
								
								<input type="password" placeholder="Password..." class="form-control" v-model="Password">
							</div>
						</div>

						<div class="text-center">
							<a href="#" class="btn btn-primary btn-round" @click="TryRegister (Name, Email, Password)">Get Started</a>
						</div>
					</form>

					<div class="card-footer mr-auto ml-auto mt-2">
						<a href="/login">I have an account</a>
					</div>
				</div>
				<div class="alert alert-danger text-center" role="alert" v-if="ErrorName">
					{{ErrorName}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SignUp",
		data () {
			return {
				Name: "",
				Email: "",
				Password: "",
				ErrorName: undefined
			}
		},
		methods: {

			TryRegister (Name, Email, Password) {

				this.ErrorName = undefined;

				const ME = this;

				$.post ("https://knowapi-knowapi.wedeploy.io/knowapi/v1/register", 
					{username: Name, email: Email, password: Password})
					.always (function (Response) {

						const JSONResponse = Response.responseJSON;

						if (JSONResponse && JSONResponse["msg_err"]) {

							ME.CheckErrors (JSONResponse["msg_err"]);
						}
						else {

							window.sessionStorage.u = Response.user;
							window.sessionStorage.t = Response.token;

							ME.$router.push ("/feed");
						}
				});
			},

			CheckErrors (ErrorMessage) {

				const Errors = {
					"EMAIL-IN-USE": "That e-mail has been registered"
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

<style></style>