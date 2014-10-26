<head>
 	<?php getMeta(); ?>

 	<meta name="viewport" content="width=device-width, initial-scale=1"> <!--Pure-CSS mobile view-->

	<link rel="stylesheet" type="text/css" href="<?php echo CSSPATH."mainHeader.css"?>"> <!-- MAINHEADER STYLESHEET: fenrirAB -->
	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css"> <!--Pure-CSS main code-->
	<link rel="stylesheet" type="text/css" href="<?php echo CSSPATH."main.css"?>">
	<link rel="stylesheet" type="text/css" href="<?php echo CSSPATH."flexslider.css"?>"> 	<!-- MAIN STYLESHEET -->

	<!-- Start of responsive css from purecss.io -->
	 	<!--[if lte IE 8]>
	    	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-old-ie-min.css">
		<![endif]-->
		<!--[if gt IE 8]><!-->
	    	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-min.css">
		<!--<![endif]-->
	<!-- End of responsive css -->

	<script type="text/javascript" src="<?php echo JAVASCRIPT."jquery-2.1.1.min.js"?>"></script>
	<script language="javascript" type="text/javascript" src="<?php echo JAVASCRIPT."jsFunctions.js"?>"></script>
	<script language="javascript" type="text/javascript" src="<?php echo JAVASCRIPT."pageNotFound.js"?>"></script>	
	<script language="javascript" type="text/javascript" src="<?php echo JAVASCRIPT."jquery.flexslider.js"?>"></script>	
	<script language="javascript" type="text/javascript" src="<?php echo JAVASCRIPT."jquery.flexslider-min.js"?>"></script>	
	<script type="text/javascript">
		$(window).load(function() {
			$('.flexslider').flexslider();
		});
	</script>

	<title><?php getTitle($pageNum); ?></title>  		  
</head>