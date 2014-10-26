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


//Image Slider
//Written by Aaron Clark

//1. set ul width 
//2. image when click prev/next button
var ul;
var liItems;
var imageNumber;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;
var windowWidth;


$(window).resize(function() {
	document.getElementById('sliderImage1').style.width =  window.innerWidth + 'px';
	document.getElementById('sliderImage2').style.width =  window.innerWidth + 'px';
	document.getElementById('sliderImage3').style.width =  window.innerWidth + 'px';
	imageWidth = liItems[0].children[0].clientWidth;
	ul.style.width = parseInt(imageWidth * imageNumber) *2 + 'px';
});

function init(){

	document.getElementById('sliderImage1').style.width =  window.innerWidth + 'px';
	document.getElementById('sliderImage2').style.width =  window.innerWidth + 'px';
	document.getElementById('sliderImage3').style.width =  window.innerWidth + 'px';
	
	windowWidth = window.innerwidth;
	ul = document.getElementById('imageSlider');
	liItems = ul.children;
	imageNumber = liItems.length;
	imageWidth = liItems[0].children[0].clientWidth;
	ul.style.width = parseInt(imageWidth * imageNumber) *2 + 'px';
	prev = document.getElementById("prev");
	next = document.getElementById("next");
	generatePager(imageNumber);
	//.onclike = slide(-1) will be fired when onload;
	/*
	prev.onclick = function(){slide(-1);};
	next.onclick = function(){slide(1);};*/
	prev.onclick = function(){ onClickPrev();};
	next.onclick = function(){ onClickNext();};
}

function animate(opts){
	var start = new Date;
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed / opts.duration;
		if (progress > 1){
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if (progress == 1){
			clearInterval(id);
			opts.callback();
		}
	}, opts.delay || 17);
	//return id;
}

function slideTo(imageToGo){
	var direction;
	var numOfImageToGo = Math.abs(imageToGo - currentImage);
	// slide toward left

	direction = currentImage > imageToGo ? 1 : -1;
	currentPostion = -1 * currentImage * imageWidth;
	var opts = {
		duration:1000,
		delta:function(p){return p;},
		step:function(delta){
			ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
		},
		callback:function(){currentImage = imageToGo;}	
	};
	animate(opts);
}

function onClickPrev(){
	if (currentImage == 0){
		slideTo(imageNumber - 1);
	} 		
	else{
		slideTo(currentImage - 1);
	}		
}

function onClickNext(){
	if (currentImage == imageNumber - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}		
}

function generatePager(imageNumber){	
	var pageNumber;
	var pagerDiv = document.getElementById('pager');
	pagerDiv.style.width = parseInt(window.innderwidth / 2) + 'px';
	for (i = 0; i < imageNumber; i++){
		var li = document.createElement('li');
		pageNumber = document.createTextNode(parseInt(i + 1));
		li.appendChild(pageNumber);
		pagerDiv.appendChild(li);
		var pagerSize = parseInt((100 / imageNumber) - (imageNumber*2));
		li.style.width = pagerSize + '%';
		li.style.height = '50px';
		
		// add event inside a loop, closure issue.
		li.onclick = function(i){
			return function(){
				slideTo(i);
			}
		}(i);
	}
}

window.onload = slideShow;
//window.onload = init;