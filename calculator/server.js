const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 5000;
const routes = {
    '/hallo': hallo,
    '/goodbye': goodbye,
    '/add': add,
    '/mult': mult
}


const makeServer = ((request, response) => {
        response.writeHead(200, {'Content-type': 'text/html'});
        //     fs.readFile('./index.html', null, function(error, data){
        //     if (error) {
        //         response.writeHead(404);
        //         response.write('File not found');
        //     } else {
        //         response.write(data);
        //     }
        //     response.end();
        //     // response.write('Hi there');
        // })
        response.write(`<h2>Calculator result</h2>`);
        // response.end();
        });

        server = http.createServer(makeServer).listen(port, () => {
            console.log(`Node.js is working at port ${port}`);
        });

server.on('request', (request, response) => {
    const parsedUrl = url.parse(request.url, true);
        if (!routes[parsedUrl.pathname]) {
            response.write('path not found');
            response.end();
            return;
        }
        server.emit(parsedUrl.pathname, parsedUrl.query, response);
});      

        for (let route of Object.keys(routes)) {
            server.on(route, (query, response) => {
                const result = routes[route](query);
                response.write(showResult(result));
                response.end();

            })
        }
        
        // for(let route of Object.keys(routes)) {
        //     console.log(route);
        // }

        // for(let route in Object.keys(routes)) {
        //     console.log(route);
        // }

function showResult(result){
    return `<h4 style = "color: blue">${result}</h4>`
}

function hallo(query){
    const { greeting } = query;
    return greeting;
}

function goodbye(query){
    const { farwell } = query;
    return farwell;
}

function add(query){
    const {op1, op2} = query;
    return parseInt(op1) + parseInt(op2);
}

function mult(query){
    const {op1, op2} = query;
    return parseInt(op1) * parseInt(op2);
}

	
