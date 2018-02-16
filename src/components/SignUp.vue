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

							<input type="text" class="form-control" placeholder="First Name...">
						</div>
					</div>

					<div class="form-group bmd-form-group">
						<div class="input-group">
							<div class="input-group-prepend mt-2">
								<span class="input-group-addon">
									<i class="fa fa-envelope"></i>
								</span>
							</div>
							
							<input type="text" class="form-control" placeholder="Email...">
						</div>
					</div>

					<div class="form-group bmd-form-group">
						<div class="input-group">
							<div class="input-group-prepend mt-2">
								<span class="input-group-addon text-center">
									<i class="fa fa-lock"></i>
								</span>
							</div>
							
							<input type="password" placeholder="Password..." class="form-control">
						</div>
					</div>

					<div class="text-center">
						<a href="#" class="btn btn-primary btn-round">Get Started</a>
					</div>
				</form>

				<div class="card-footer mr-auto ml-auto mt-2">
					<a href="/login">I have an account</a>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>
	export default {
		name: "SignUp"
	}
</script>

<style></style>