const fs = require('fs');
const http = require('http');
const map2 = require('through2-map');

const server = http.createServer((req, res) => {
  res.pipe(map2((chunk) => {
    return chunk.toString();
  }));
});

server.listen(process.argv[2]);
