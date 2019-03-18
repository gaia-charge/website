//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//Change bg of .transperent navbar on responsive devices
var removeClass = true;
$("button.navbar-toggle").click(function () {
    $("nav:first").toggleClass('navbar-transparent-collapsed');
    removeClass = false;
});

$("nav:first").click(function() {
    removeClass = false;
});

$("html").click(function () {
    if (removeClass) {
        $("nav:first").removeClass('navbar-transparent-collapsed');
    }
    removeClass = true;
});

