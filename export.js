// const User = require('./js-interview/index');
// // import User from './js-interview/index'

// const newUser = new User('Domanski', 'domanski@email.com');

// console.log(newUser);

for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    (function(i){
        btn.addEventListener('click', function(){ console.log(i); });
    })(i);
    document.body.appendChild(btn);
  }