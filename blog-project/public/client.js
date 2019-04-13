// const config = require('../project.config')

const socket = io.connect(`http://localhost:4000`);

function element(id){
    return document.getElementById(id);
}

// socket.on('output', (data) => {
//     const msgText = document.createElement('div');
//     msgText.innerHTML = `<div>${data.message}</div>`
// });

const textArea = element('textarea');

textArea.addEventListener('keydown', (event) => {
    if (event.keyCode == 13){
        socket.emit('input', {message: textArea.value});
    }
})

console.log(element('username'));