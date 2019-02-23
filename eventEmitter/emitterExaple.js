const EventEmitter = require('events').EventEmitter;
const chatRoomEvents = new EventEmitter();


function displayMessage (message){
    document.write(message)
}

function userJoined(username) {
    //alertAllUsers()
    // alertAllUsers(`User ${username} has joined the chat`);
    chatRoomEvents.on('message', displayMessage)
}

chatRoomEvents.on('userJoined', userJoined);
chatRoomEvents.removeListener('message', displayMessage);

//login.js
function login(username){
    //some login login
    chatRoomEvents.emit('userJoined', username);
}

removeListener