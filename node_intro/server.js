const express = require('express');
const server = express();
server.set('port', process.env.PORT || 3000)

//Basic routes
server.get('/', (req, res) => {
    res.send('Home page powered express');
});

server.get('/about', (req, res) => {
    res.send('About page powered express');
});

server.get('/blog', (req, res) => {
    res.send('Blog page powered express');
});

server.use((req, res) => {
    res.type('text/plain');
    res.status(505);
    res.send('Page doesnt exist');
})

server.listen(3000, () => console.log('Server is powered by express'));
