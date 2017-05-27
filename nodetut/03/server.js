const http = require('http');
// filesystem module allows access the filesystem
const fs = require('fs');

function onRequest(request, response) {
  // change out content-type from ../plain to ../html
  response.writeHead(200, { 'Content-Type': 'text/html' });
  // path, options, callback
  fs.readFile('./index.html', null, (error, data) => {
    if (error) {
      // if file couldn't be read
      // write 404
      // write error message
      response.writeHead(404);
      response.write('File not found!');
    } else {
      // if file could be read
      // keep our existing head
      // write data, which is the passed html file
      response.write(data);
    }
    response.end();
  });
  // response.end();
  // because of node's asyncrhonous nature
  // we put response.end() inside the if statement
  // lest it ran before we recieved the data back from fs
}

http.createServer(onRequest).listen(8000);
