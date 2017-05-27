// we will define the server handler function (createServer()) in here
// url contains helper functions to get the path for routing
const url = require('url');
const fs = require('fs');

function renderHTML(path, response) {
  fs.readFile('path', null, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.write('File not found!');
    } else {
      response.write(data);
    }
    response.end();
  });
}

module.exports = {
  handleRequest: function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // get path
    const path = url.parse(request.url).pathname;
    // router logic
    switch (path) {
      case '/':
        renderHTML('./index.html', response);
        break
      case '/login':
        renderHTML('./login.html', response);
        break
      default:
        response.writeHead(404);
        response.write('Error 404 Page Not Found');
        response.end();
    }
  }
};
