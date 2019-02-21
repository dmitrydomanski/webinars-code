const http = require('http');
const url = require('url');

const makeServer = function (req, res) {
    let path = url.parse(req.url).pathname;
    console.log(path);
    if (path === '/'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write('Basic path');
    }
    else if (path === '/about'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write('About page');
    }
    else if (path === '/blog'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write('Blog page');
    }
    else {
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.write('Page not found');
    }
res.end();
}

const server = http.createServer(makeServer);
server.listen(3000, () => console.log('Server is up and listening'));
