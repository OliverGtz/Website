<!DOCTYPE html>
<?php require_once('init.php'); ?>
<html>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1"> <!--Pure-CSS mobile view-->
	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css"> <!--Pure-CSS main code-->
	<link rel="stylesheet" href="display/body/stylesheets/inc_header.css"> <!--Header Stylesheet-->
	<?php getCSS($pages, $pageNum); ?> <!--Body Stylesheet-->
	

	<title><?php getTitle($pageNum); ?></title>
  		   <?php getMeta(); ?>
		   
</head>
<body>
<?php include ("display\body\inc_header.html"); ?>
<?php getBody($pages, $pageNum); ?>
</body>
</html>