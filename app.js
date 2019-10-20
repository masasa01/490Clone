//const submitAnswer = document.querySelector('#answer')
var http = require("http");
var express = require('express');
var app = express();
const { parse } = require('querystring');
var port = process.env.PORT || 9000;

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.post('/query', function(request, response){

    let body = '';
    request.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    request.on('end', () => {
        console.log(parse(body));
        console.log('');
        console.log(parse(body.user));
        console.log('');
        var x = parse(body);
        console.log(x);
        console.log(x.number);

        response.end('ok');
    });

    

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
