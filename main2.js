var http = require('http');

http.createServer(function(req, res){


    // send the http header
    // http status : 200 ok
    // content type: text/plain

    response.writeHead(200,{'Content-Type': 'text/plain'});



    // send the response body as "hello world"

    res.end("Hello world")
}).listen(8086)

console.log("server running at http://localhost:8086")

