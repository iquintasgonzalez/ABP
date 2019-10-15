<?php
//file: view/users/register.php

require_once(__DIR__."/../../core/ViewManager.php");
$view = ViewManager::getInstance();
$errors = $view->getVariable("errors");
$user = $view->getVariable("user");
$view->setVariable("title", "Register");
?>
<h1><?= i18n("Register")?></h1>
<form action="index.php?controller=users&amp;action=register" method="POST" enctype="multipart/form-data">
	<?= i18n("Username")?>: <input type="text" name="username"
	value="<?= $user->getUsername() ?>">
	<?= isset($errors["username"])?i18n($errors["username"]):"" ?><br>

	<?= i18n("Password")?>: <input type="password" name="passwd" value="">
	<?= isset($errors["passwd"])?i18n($errors["passwd"]):"" ?><br>

	<?= i18n("Name")?>: <input type="text" name="nombre" value="<?= $user->getNombre() ?>">
	<?= isset($errors["nombre"])?i18n($errors["nombre"]):"" ?><br>

	<?= i18n("Email")?>: <input type="email" name="email" value="<?= $user->getEmail() ?>">
	<?= isset($errors["email"])?i18n($errors["email"]):"" ?><br>

	<?= i18n("Avatar")?>: <input type="file" name="avatar" value="<?= $user->getAvatar() ?>">
	<?= isset($errors["avatar"])?i18n($errors["avatar"]):"" ?><br>

	<?= i18n("Gender")?>:
	<input type="radio" name="sexo" value="hombre"><?= i18n("Male")?><br>
	<input type="radio" name="sexo" value="mujer"><?= i18n("Female")?><br>
	<?= isset($errors["sexo"])?i18n($errors["sexo"]):"" ?><br>

	<input type="submit" value="<?= i18n("Register")?>">
</form>
