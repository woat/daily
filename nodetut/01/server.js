// allows for createServer method
const http = require('http');

function onRequest(request, response) {
  // sets the header of response
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  // a method to currently write text to the DOM
  response.write('Hello World');
  // outputs the response
  response.end();
}

// creates a server on port 8000
// onRequest is a function that handles all requests to the server
http.createServer(onRequest).listen(8000);
