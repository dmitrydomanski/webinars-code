const express = require('express');
const server = express();
const users = require('./users');

server.set('port', process.env.PORT || 3000);
// server.set('port', 3000);

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.get('/users', (req, res) => {
    // const usersManager = new UsersManager();
    // const result = usersManager.getUsers();
    // UsersManager.js
    // const getUsers = () => {
        // const result = Users.find({});
        // return result
    // }
        res.json(users);
})

server.listen(3000, () => console.log('Server is running at port 3000'));

// console.log(users[0]);