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

    //Render Index Page
    renderHTML('../public/examples/jumbotron/index.html', res);

    //Used for ../views/index.jade
  //res.render('index', { title: 'Express' });
});

module.exports = router;