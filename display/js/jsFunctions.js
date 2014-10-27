//TODO fenrirAB - awwwwww yeeeeaaaahhhh!
$(window).scroll(function() {
	if($(this).scrollTop() > 40) {
		//when you scroll down
		$("#headerID").css('background-color', 'rgba(0,0,0,.8)');
		$("#clubLogo").fadeIn(function() {
			$(this).attr('src','display/media/images/logo2.png');
		});
	}
	else {
		//when you scroll up
		console.log('there');
		$("#headerID").css('background-color', 'rgba(0,0,0,0.0)');
		$("#clubLogo").fadeOut(function() {
			$(this).attr('src','display/media/images/logo1.png').fadeIn();
		});
	
	}
});

function slideShow()
{
	$(document).ready(function(){

    $("#slideShow a").first().show();

    var count = 0;		//array start at 0
    var MAX_SLIDES = 2; //array ends at 2 (0, 1, 2)

    function autoSlide() {
    	//five second delay
        $("#slideShow a").delay(5000).eq(count).fadeOut(function() { 
            if (count === MAX_SLIDES){
                count = -1; // reset to repeat
            }
            
            $("#slideShow a").eq(count+1).fadeIn(function() {
                count++;
                autoSlide();
            });
        });
    }
    autoSlide();

});
}

// END of fenrirAB

