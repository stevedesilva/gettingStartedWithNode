const http = require('http');

const server = http.createServer(
  (request, response) => {
    response.end('Hello Ben are you learning?\n');
  }
);

server.listen(4242, () => {
  console.log('Server is running locally...');
});
