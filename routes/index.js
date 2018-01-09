var express = require('express');
var router = express.Router();
var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {

    //Write Index Page
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(400);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {

    var domain = req.headers.host;
    var subDomain = domain.split('.');

    //Check if the request had a subdomain
    if(subDomain.length > 2) {
        subDomain = subDomain[0].split("-").join(" ");

        //Route subdomain to correct page
        if (subDomain === "noentry") {
            //Render No Entry Page
            renderHTML('../public/examples/jumbotron/noentry.html', res);
        }
        else if (subDomain === "stars") {
            //Render Stars Page
            renderHTML('../public/examples/jumbotron/stars.html', res);
        }
        else {
            //Render Index Page
            renderHTML('../public/examples/jumbotron/index.html', res);
        }
    }
    else {
        //Render Index Page
        renderHTML('../public/examples/jumbotron/index.html', res);
    }
});

module.exports = router;