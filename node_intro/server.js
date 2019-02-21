const http = require('http');

const makeServer = ((request, response) => {
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hi there');
    response.end();
})

server = http.createServer(makeServer);

server.listen(3000, () => {
    console.log('Node.js is working at port 3000');
})

    //   server.on('request', (request, response) => {
    //       response.writeHead(200, {'Content-type': 'text/plain'});
    //       response.write('Hello');
    //       response.end();
    //   });
