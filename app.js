//const submitAnswer = document.querySelector('#answer')
var http = require("http");
var port = 9000;

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/htmml'});
    response.write('Work')
    response.end();

}).listen(port); //in tutorial it's port 8081

console.log('asdf');

