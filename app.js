//const submitAnswer = document.querySelector('#answer')
var http = require("http");
var express = require('express');
var app = express();
var port = 9000;

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
