var express = require('express');
var app = express();
var path = require('path');

app.use('/vendor', express.static('vendor'));
app.use('/scss', express.static('scss'));
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, function(){
    console.log("server listening on 8080");
});