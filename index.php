<!DOCTYPE html>
<?php require_once('init.php'); ?>
<html>

<head>
	<title><?php getTitle($pageNum); ?></title>
  		   <?php getMeta(); ?>
</head>
<body>
<ul>
<?php getNav(); ?>
</ul>
<?php getBody($pages, $pageNum); ?>
</body>
</html>