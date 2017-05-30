const fs = require('fs');
const path = require('path');
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead('200', { 'Content-Type': 'text/html' });
  fs.createReadStream(path.join(__dirname, 'index.htm')).pipe(res);
}).listen(1337);
