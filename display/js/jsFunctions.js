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

