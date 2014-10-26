//TODO fenrirAB - awwwwww yeeeeaaaahhhh!
$(window).scroll(function() {
	if($(this).scrollTop() > 40) {
		//when you scroll down
		$("#headerID").css('background-color', 'rgba(0,0,0,.8)');
	
	
	}
	else {
		//when you scroll up
		console.log('there');
		$("#headerID").css('background-color', 'rgba(0,0,0,0.0)');
	
	}
});

