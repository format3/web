$(document).ready(function() {

    $('.navbar-social-left').css({"height":"" + $(window).height() - 80 +  ""});
    $('.navbar-social-right').css({"height":"" + $(window).height() - 80 +  ""});

    //Window resize
    $(window).resize(function() {
        $('.navbar-social-left').css({"height":"" + $(window).height() - 80 +  ""});
        $('.navbar-social-right').css({"height":"" + $(window).height() - 80 +  ""});
    });


    //Phone or Computer
    if ($(window).height() < 600) {
        socialSide();
    }
    else {
        socialBottom();
    }

    //On Window Resize
    var mq = window.matchMedia("(min-height: 600px)");

    mq.addListener(function(changed) {
        if(changed.matches) {
            //Width of browser is more then 600px
            socialBottom();
        } else {
            //Width of browser is less then 600px
            socialSide();
        }
    });
});

function socialBottom() {
    $('.navbar-social-left').hide();
    $('.navbar-social-right').hide();
    $('.navbar-social-bottom').show();
}

function socialSide() {
    $('.navbar-social-left').show();
    $('.navbar-social-right').show();
    $('.navbar-social-bottom').hide();
}