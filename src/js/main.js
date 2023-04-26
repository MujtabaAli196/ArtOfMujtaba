// Hide Header on on scroll down
import $ from "jquery";



// $('#target').scroll();
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight() || 0;

// $(window).scroll(function(event){
//     if ($(window).scrollTop() === 0){
//         $('header').css( "background","#1f1f1f" );
//     } else {
//         didScroll = true;
//         $('header').css( "background","#303030" );
//     }
// });


// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//         // alert('nhng');
//     }
// }, 250);

// function hasScrolled() {
//     var st= document.body.scrollTop || document.documentElement.scrollTop;
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
//     if (st > lastScrollTop && st > navbarHeight){
//         $('header').removeClass('nav-up').addClass('nav-down');
//     } else {
//         if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-down').addClass('nav-up');
//         }
//     }
    
//     lastScrollTop = st;
// }


/*------------------back to top------------------*/
$(document).ready(function() {
    $(document).on('click', '.back-to-top', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 200);
    });
});

$(window).on("scroll", function() {
    // 
    var ScrollTop = $('.back-to-top');
    if ($(window).scrollTop() > 1000) {
        ScrollTop.fadeIn(1000);
    } else {
        ScrollTop.fadeOut(1000);
    }
});

