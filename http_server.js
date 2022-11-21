const http = require("http");

let count = 0;

const server = http.createServer(function(req, res) {
    count++;
    res.writeHead(200, {'Content-type': 'text/html; charset-utf=8'});
    res.write('<html><head><meta charset="utf-8" /></head><body>');
    res.write("<h1>Welcome to Node.JS Server</h1>");
    res.write(`<h1>접속자: ${count}</h1>`);
    res.write('</body></html>');
    res.end();
});

server.listen(7337, function () {
    console.log("Server running at http://localhost:7337");
})