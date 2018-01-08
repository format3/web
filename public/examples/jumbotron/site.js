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
        var info2 = $('#top').offset().top;

        if ($(window).width() > 450) {
            if (window.pageYOffset > 0) {
                var opac = (window.pageYOffset / info);

                //Don't fully white out screen
                if (opac > 0.8) {
                    opac = 0.8;
                }

                $("body").css({"background": "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(examples/jumbotron/format-logo.png)"});
                $("body").css({"background-position": "center"});
                $("body").css({"background-repeat": "no-repeat"});
                $("body").css({"background-size": "cover"});
                $("body").css({"background-attachment": "fixed"});
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
    //Only resize divs on computer
    if ($(window).width() > 450) {
        var height = $(window).height();
        $('body').css({"height": (2*height)});
        $('html').css({"height": (2*height)});
        $('#top').css({"height": (height)});
        $('#bottom').css({"height": (height)});
    }
}

/**
 * CSS updates for computer
 */
function computer() {
    $('#bottom').css({"position": "relative"});
    $('#bottom').css({"top": "0px"});
    $('#directionality').css({"display": "inherit"});
    $('#content').css({"height": "100%"});
    $('#content').css({"margin-top": "-30px"});
    $('#content').css({"width": "300px"});
    $('#info').css({"bottom": "0px"});
    $('#info').css({"position": "relative"});
    $('#info').css({"color": "#000000"});
    $('#info').css({"padding-bottom": "0px"});
    $('#info').css({"margin-bottom": "0px"});

}

/**
 * CSS updates for phone
 */
function phone() {
    $('body').css({"height": "100%"});
    $('html').css({"height": "100%"});
    $('#top').css({"height": "0%"});
    $('#bottom').css({"height": "100%"});
    $('#bottom').css({"position": "absolute"});
    $('#bottom').css({"top": "0px"});
    $('#directionality').css({"display": "none"});
    $('#content').css({"height": "100%"});
    $('#content').css({"margin-top": "0px"});
    $('#content').css({"width": "300px"});
    $('#info').css({"bottom": "0px"});
    $('#info').css({"position": "absolute"});
    $('#info').css({"color": "#d0cecf"});
    $('#info').css({"padding-bottom": "18px"});
    $('#info').css({"margin-bottom": "0px"});
    $('#format').css({"position": "absolute"});
}