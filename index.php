<!DOCTYPE html>
<?php require_once('init.php'); ?>
<html>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1"> <!--Pure-CSS mobile view-->
	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css"> <!--Pure-CSS main code-->
	<link rel="stylesheet" type="text/css" href="stylesheets/inc_header.css"> <!--Header Stylesheet-->
	<link rel="stylesheet" type="text/css" href="stylesheets/pageConstruction.css"> <!-- 404/underConstruction Stylesheet-->
	<link rel="stylesheet" type="text/css" href="stylesheets/body.css"> <!-- main content CSS -->
	<?php getCSS($pages, $pageNum); ?> <!--Body Stylesheet-->

	<title><?php getTitle($pageNum); ?></title>
  		   <?php getMeta(); ?>
</head>
<body style="height: 100%;">
<?php include ("display\body\inc_header.html"); ?>
<div id="content">
	<?php getBody($pages, $pageNum); ?>
</div>
</body>
</html>