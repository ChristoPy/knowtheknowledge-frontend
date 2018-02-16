<template>
	<div class="container">
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
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data () {

			return {
				Email: "",
				Password: ""
			}
		},
		methods: {

			TryLogin: function (Email, Password) {

				$.post ("https://knowapi-knowapi.wedeploy.io/knowapi/v1/login", 
					{email: Email, password: Password}, function (Response) {

					console.log (Response);
				});
			}
		}
	}
</script>

<style></style>