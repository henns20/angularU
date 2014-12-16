var http = require('http');
var port = 9090;
http.createServer(responseHandler).listen(port);
console.log('Server runnin at http://127.0.0.1:' + port + '/');

function responseHandler(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<html><body><h1>Hellow World</h1></body></html>');
}
