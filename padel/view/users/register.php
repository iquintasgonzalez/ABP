<?php
//file: view/users/register.php

require_once(__DIR__ . "/../../core/ViewManager.php");
$view = ViewManager::getInstance();
$view->setVariable("title", "Register");

$errors = $view->getVariable("errors");
$user = $view->getVariable("user");
?>

<div class="limiter">
	<div class="container-login100">
		<div class="wrap-login100">
			<form class="login100-form validate-form" method="POST" action="./index.php?controller=users&action=register">
				<span class="login100-form-title p-b-43">
					Register
				</span>

				<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
					<input type="text" name="username" value="<?= $user->getUsername() ?>">
					<span class=" focus-input100"></span>
					<span class="label-input100">Username </span>
				</div>

				<div class="wrap-input100 validate-input" data-validate="Password is required">
					<input type="password" name="passwd" value="">
					<span class="focus-input100"></span>
					<span class="label-input100">Password</span>
				</div>

				<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
					<input type="text" name="nombre" value="<?= $user->getNombre() ?>">
					<span class="focus-input100"></span>
					<span class="label-input100">Nombre </span>
				</div>

				<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
					<input type="email" name="email" value="<?= $user->getEmail() ?>">
					<span class="focus-input100"></span>
					<span class="label-input100">Email</span>
				</div>

				

				<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
					<input type="radio" name="sexo" value="hombre">Hombre<br>
					<input type="radio" name="sexo" value="mujer">Mujer<br>
					<span class="focus-input100"></span>
					<span class="label-input100">Sexo</span>
				</div>

				<div class="container-login100-form-btn">
				<button class="login100-form-btn">
							Register
						</button>
				</div>
				

			</form>

			<div class="login100-more" style="background-image: url('/images/banadas.jpeg');">
			</div>
		</div>
	</div>
</div>