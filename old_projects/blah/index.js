var express = require('express')
var app = express();

// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

app.get('/', function(req, res){
    console.log('default landing page accessed!');
    res.send('hola');
});

app.get('/foo', function(req, res){
    res.send('requested foo');
});

app.get('/not_a_search', function(req, res){
    var theQuery = req.query.q;
    res.send('query parameter:' + theQuery);
});



// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("listening on port 8080");
});