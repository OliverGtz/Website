//written by fenrirAB

// document.write("transparentHeader TEST");
$(window).scroll(function() 
{
    if ($(this).scrollTop() > 200) 
    {
        $( ".header #navBackground" ).fadeOut();
       	// $( ".header #navBackground" ).fadeTo("slow", 0.50); <-- somehow fadeTo is not in real time
    } 
    else 
    {
        $( ".header #navBackground" ).fadeIn();
        // $( ".header #navBackground" ).fadeTo("slow", 1.00); <-- somehow fadeTo is not in real time
    }
}
);