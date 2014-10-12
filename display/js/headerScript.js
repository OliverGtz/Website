//TODO fenrirAB - awwwwww yeeeeaaaahhhh!
$(window).scroll(function() {
	if($(this).scrollTop() > 350) {
		$("#headerID").css('background-color', '#000000');
	//	$("#headerID").fadeTo("slow", 1.00);
	}
	else {
		console.log('there');
		$("#headerID").css('background-color', 'rgba(0, 0, 0, 0.60)');
	//	$("#headerID").fadeTo("slow", 0.60);
	}
});