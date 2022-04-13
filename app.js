let http = require("http");

http.createServer(function(req, res) {

    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end("prueba pagina fede");

}).listen(3030, "localhost");
