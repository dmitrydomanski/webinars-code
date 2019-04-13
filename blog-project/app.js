const mongoose = require('mongoose');
const socket = require('socket.io');
const express = require('express');
const path = require('path');
const config = require('./project.config')

// create server
const app = express();
const server = app.listen(config.PORT,
    () => console.log(`Server is listening at port ${config.PORT}`));

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

//set bootstrap folder
app.use(
    '/bootstrap',
    express.static(__dirname + '/node_modules/bootstrap/dist/css/')
  );

// set template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// connect to the database
mongoose.connect(config.MONGO_URL, { useNewUrlParser: true });
let db = mongoose.connection;

// homepage route
app.get('/', (req, res) => {
    // res.send('Chat under construction...');
    res.render('index');
});

// check database connection
db.once('open', () => console.log('Connected to mongoDB'));
db.on('error', (err) => console.log(err));

// create socket
const io = socket(server);
io.on('connection', (socket) => {
    console.log(`socket connection ${socket.id} establised`);

    // catch chat message
    socket.on('input', (data) => console.log(data.message));
});