<!DOCTYPE html>
<?php require_once('init.php'); ?>
<html>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1"> <!--Pure-CSS mobile view-->
	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css"> <!--Pure-CSS main code-->
	<link rel="stylesheet" type="text/css" href="display/body/stylesheets/inc_header.css"> <!--Header Stylesheet-->
	<link rel="stylesheet" type="text/css" href="display/body/stylesheets/pageConstruction.css"> <!-- 404/underConstruction Stylesheet-->
	<?php getCSS($pages, $pageNum); ?> <!--Body Stylesheet-->
	<script type="text/javascript" src="includes/reflex.js"></script> <!--javascript for reflections-->
	

	<title><?php getTitle($pageNum); ?></title>
  		   <?php getMeta(); ?>
</head>
<body style="height: 100%; 
	background-image: url("http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-17.jpg");
	background-repeat: repeat-y;
	background-size: auto%;">
<?php include ("display\body\inc_header.html"); ?>
<?php getBody($pages, $pageNum); ?>
</body>
</html>