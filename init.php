<?php 
define("SECURE", TRUE);
require('config.php');
require(FUNCPATH.'main_functions.php');
require(FUNCPATH.'display_functions.php');
 $currentPage = returnPage();
 $pageNum  = getPageNum($currentPage);

 ?>