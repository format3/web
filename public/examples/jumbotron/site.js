$(document).ready(function() {

    //Resize divs
    resize();

    //Phone or Computer
    if ($(window).width() < 450) {
        phone();
    }
    else {
        computer();
    }

    //On Window Resize
    var mq = window.matchMedia("(min-width: 450px)");

    mq.addListener(function(changed) {
        if(changed.matches) {
            //Width of browser is more then 450px
            computer();
        } else {
            //Width of browser is less then 450px
            phone();
        }
    });

    window.onscroll = function() {

        //On Window Scroll
        var info = $('#info').offset().top;
        var info2 = $('.top').offset().top;

        if ($(window).width() > 450) {
            if (window.pageYOffset > 0) {
                var opac = (window.pageYOffset / info);

                //Don't fully white out screen
                if (opac > 0.9) {
                    opac = 0.9;
                }

                //Fade background
                $("body").css({"background": "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(examples/jumbotron/format-logo.png)"});
                $("body").css({"background-position": "center"});
                $("body").css({"background-repeat": "no-repeat"});
                $("body").css({"background-size": "cover"});
                $("body").css({"background-attachment": "fixed"});

                //Fade direction
                $("#directionality").css({"opacity":"" + (1-opac) + ""});
            }
        }
    }
    
    //Window resize
    $(window).resize(function() {
        resize();
    });
});

/**
 * Resize top and bottom divs when window is resized
 */
function resize() {

    var height = $(window).height();

    //Only resize divs on computer
    if ($(window).width() > 450) {
        $('body').css({"height": (2*height)});
        $('html').css({"height": (2*height)});
        $('.top').css({"height": (height)});
        $('.bottom').css({"height": (height)});
    }
    else {
        $('body').css({"height":"" + height + ""});
        $('html').css({"height":"" + height + ""});
    }
}

/**
 * CSS updates for computer
 */
function computer() {
    $('.bottom').css({"position": "relative"});
    $('.bottom').css({"top": "0px"});
    $('#directionality').css({"display": "inherit"});
    $('#raised').css({"display": "inherit"});
    $('#raised').css({"margin-top": "-30px"});
    $('#raised').css({"position": "absolute"});
    $('#raised').css({"text-align": "center"});
    $('#content').css({"height": "100%"});
    $('#info').css({"bottom": "0px"});
    $('#info').css({"color": "#000000"});
    $('#info').css({"padding-bottom": "0px"});
    $('#info').css({"margin-bottom": "0px"});
    $('#info').css({"left": "0px"});
    $('#info').css({"margin": "auto"});
    $('#info').css({"position": "relative"});
    $('#info').css({"top": "50%"});
    $('#info').css({"transform": "translateY(-50%)"});
    $('#info').css({"font-size": "26px"});
    $('#format').css({"position": "fixed"});
}

/**
 * CSS updates for phone
 */
function phone() {
    $('.top').css({"height": "100%"});
    $('#raised').css({"display": "none"});
    $('.bottom').css({"height": "100%"});
    $('.bottom').css({"position": "absolute"});
    $('.bottom').css({"top": "0px"});
    $('#directionality').css({"display": "none"});
    $('#content').css({"height": "unset"});
    $('#content').css({"bottom": "0px"});
    $('#info').css({"bottom": "0px"});
    $('#info').css({"color": "#d0cecf"});
    $('#info').css({"padding-bottom": "18px"});
    $('#info').css({"margin-bottom": "0px"});
    $('#info').css({"left": "0px"});
    $('#info').css({"margin": "auto"});
    $('#info').css({"top": "inherit"});
    $('#info').css({"position": "relative"});
    $('#info').css({"transform": "inherit"});
    $('#info').css({"font-size": "14px"});
    $('#format').css({"position": "absolute"});
}