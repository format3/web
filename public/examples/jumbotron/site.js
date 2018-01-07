$( document ).ready(function() {

    var info = document.querySelector("p").offsetTop;
    window.onscroll = function() {
        if (window.pageYOffset > 0) {
            var opac = (window.pageYOffset / info);
            if (opac > 0.8) {
                opac = 0.8;
            }
            //console.log("Opacity: " + opac);
            document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(examples/jumbotron/format-logo.png) no-repeat";
        }
    }
});