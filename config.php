<?php 

if(SECURE)
{

// Reminder: Turn off error reporting when site is live. 
error_reporting(E_ALL);


// Constants
define("BASEPATH", basename(__DIR__));
define('VIEWPATH', ('display/'));
define('BODYPATH', VIEWPATH.'body/');
define('INCLUDEPATH', '/includes/');
define('FUNCPATH', INCLUDEPATH.'functions/');
define('BADREQUEST', BODYPATH.'404.php');
define('METAFILE', VIEWPATH.'meta.php');
define('DBUSERNAME', "");
define('DBPASSWORD', "");
define('DBHOST', "");
define("ADMIN", "James");
define('PASS', "password");


$pages = array(
   /*
	To add new page to site:

	Step 1: Add an array with the following:
	 array('page' => 'your_page_name_here', 'filename' => 'your_filename_here')
	 Note: Add commas as needed after each array, except for the last array.
	 Filename Note: First letter must be capital.
	 
	 Step 2: Add a php file in the includes/body folder 
	 Note: filename must match filename in array from step 1.

	 Step 3: Edit the file with html.


   */

	array( 'page' => 'Home', 'filename' => 'home.php', 'title' => 'Homepage - Software Engineering Club'),
	array( 'page' => 'Projects', 'filename' => 'projects.php', 'title' => 'Our work - Software Engineering Club'),
	array( 'page' => 'About', 'filename' => 'about.php', 'title' => 'About Us - MVC Club - Software Engineering Club'),
	array( 'page' => 'Contact', 'filename' => 'contact.php', 'title' => "Contact Us")

	 );


}
	else
		{
			 header("HTTP/1.1 403 Forbidden");
		     exit;
	    }
 ?>