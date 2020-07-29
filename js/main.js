$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:2800,
        autoplaySpeed: 4500,
        // navRewind: false,
        margin: 0,
        responsiveClass:true,
        center: true,
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
            }
        }
    });

    //set footer date
    $('#date').html(new Date().getFullYear());

    //menu background change on scroll
    $(window).scroll(() => {
        let fromTopPx = 300; // distance to trigger
        let scrolledFromtop = jQuery(window).scrollTop();

        if(scrolledFromtop > fromTopPx){
            $('#header').css({ backgroundColor: 'rgba(250, 81, 88, 0.9)'});
        }else{
            $('#header').css({ backgroundColor: 'transparent'});
        }
    });

    //menu toggle click handler
    $('#menu-toggle').click(() => {
        let visible = $('.nav .nav-items').css("display");

       if(visible === 'none') $('.nav .nav-items').css({ display: 'flex'});
       else $('.nav .nav-items').css({ display: 'none'});
    })

    // smoot scrol for IE, EDGE, Safary
	$("a").on('click', function(event){
		if(this.hash !== ""){
			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash; 
			})
		}
	});
 
})