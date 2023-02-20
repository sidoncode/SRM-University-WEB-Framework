/* Hello World Program in NodeJs 


console.log("hello world")*/


// importing - Nodejs - Module //

var http = require('http');


http.createServer(function(request, response){

    // send the http header
    // http status: 200 :OK
    // content Type: text/plain

    response.writeHead(200,{'Content-Type': 'text/plain'})

    // send the response as Hello World
    response.end("Hello World")

}).listen(8089);


console.log("Server is running at http://localhost:8089")