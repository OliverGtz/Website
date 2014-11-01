<!DOCTYPE html>
<?php require_once('init.php') ?>
<html>

<?php include(HEADFILE); ?>

<body>
<?php include ("display\body\mainHeader.html"); ?>
<?php getBody($pages, $pageNum); ?>

</body>
	<?php include ("display\body\inc_footer.php"); ?>
</html>
