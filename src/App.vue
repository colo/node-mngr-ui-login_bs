<template>
  <div id="login">
		<b-container class="bv-example-row">
			<b-row>
					<b-col><br></b-col>
			</b-row>
			<b-row>
					<b-col><br></b-col>
					<b-col>
						<b-form @submit="onSubmit">
						<b-card no-body bg-variant="dark" text-variant="white" header="Login:" header-tag="header">

								<b-card-body>
									<b-input-group>
										<b-input-group-addon><i class="fa fa-user"></i></b-input-group-addon>
										<b-form-input id="username" type="text" v-model="form.username" required placeholder="Username"></b-form-input>
									</b-input-group>
									<br>
									<b-input-group>
										<b-input-group-addon><i class="fa fa-key"></i></b-input-group-addon>
										<b-form-input id="password" v-model="form.password" type="password" placeholder="Password"></b-form-input>
									</b-input-group>
								</b-card-body>

								<b-card-footer>
									<b-input-group>
										<b-form-checkbox id="checkbox1"
													 v-model="status"
													 value="accepted"
													 unchecked-value="not_accepted">
											Remember me
										</b-form-checkbox>
									</b-input-group>

									<b-input-group>
										<b-button type="submit" variant="primary"><i class="fa fa-sign-in"></i> Login</b-button>    
									</b-input-group>
								</b-card-footer>
							
						</b-card>
						</b-form>
						
					</b-col>
					
					<b-col><br></b-col>
			</b-row>
		</b-container>
	 
  </div>
</template>

<script src='./models/login.js'></script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>
<style>
</style>
