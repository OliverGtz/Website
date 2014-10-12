<!DOCTYPE html>
<?php require_once('init.php') ?>
<html>

<?php include(HEADFILE); ?>

<body style="height: 100%; 
	background-image: url("");
	background-repeat: repeat-y;
	background-size: auto%;">
<?php include ("display\body\mainHeader.html"); ?>
<?php getBody($pages, $pageNum); ?>
</body>
</html>
