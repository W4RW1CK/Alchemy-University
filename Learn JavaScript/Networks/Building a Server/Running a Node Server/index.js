const http = require('http');

const server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
  console.log(request.headers)
});

server.listen({ port: 3000, host: 'localhost' }, function() {
  console.log('Server is running!');
});
