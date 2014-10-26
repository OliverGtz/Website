function matrixNotFound()
{

	var pageNotFound = document.getElementById("pageNotFound");
	var matrix = pageNotFound.getContext("2d");
	pageNotFound.width = window.innerWidth;
	pageNotFound.height = window.innerHeight;

	var logs = "A T G C  0 1 0 1 PAGE NOT FOUND \u00DF \u00F1 \00C7 \u30A2 \u30C2 \u30AE \u30B7 ;:";
	logs = logs.split("");

	var FONT_SIZE = 10;
	var columns = pageNotFound.width/FONT_SIZE; 
	var gravity = [];

	// number of columns for gravity to work on...
	for(var x = 0; x < columns; x++)
	{
		gravity[x] = 1;
	}
	function draw()
	{
		matrix.fillStyle = "rgba(0, 0, 0, 0.05)"; 	//black background WITH opacity to show trailing effect
		matrix.fillRect(0, 0, pageNotFound.width, pageNotFound.height);
		
		matrix.fillStyle = "#0062FF"; 				//TEXT COLOR
		matrix.font = FONT_SIZE + "px arial";
	    
	    // falling logs - random trailing characters
		for(var y = 0; y < gravity.length; y++)
		{
			//randomize falling logs to whichever character on the log lenght... yup including space (' ') char
			var text = logs[Math.floor(Math.random()*logs.length)];
			matrix.fillText(text, y * FONT_SIZE, gravity[y]*FONT_SIZE);
			
			//if the size of the falling gravity is more than the height AND the math random is greater than 0.951 (YEA, SON!) 
			if(gravity[y]*FONT_SIZE > pageNotFound.height && Math.random() > 0.951)
			{
				// then start the gravity fall back to zero;
				gravity[y] = 0;
			}
			gravity[y]++; // D-d-d-d-drop the bass!!
		}
	}

	setInterval(draw, 40); // in milliseconds!
}

//window.onload = matrixNotFound;


// had trouble running this file but thanks to Aaron's code, the onload worked like a charm*/

