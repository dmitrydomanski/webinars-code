// alert('it works!');
const names = ["Isaak", "Doron", "Elad"];

const fullNames = names.map(function(name) {
  return `${name} Rubinstein`;
});

// console.log(fullNames);

const fullNamesArrow = names.map(name => `${name} Rubinstein`);
// .filter(name => name.includes('Isaak'))

// console.log(fullNamesArrow);

const sayPrivet = () => console.log("privet");

// sayPrivet();

// function myHobby(hobby){
//     console.log(`My hobby is ${hobby}`);
// }

const myHobby = hobby => console.log(`My biggest hobby is ${hobby}`);

// myHobby('football')

const box = document.querySelector(".box");

// box.addEventListener('click', function(){
//     console.log(this);
// })

// box.addEventListener('click', () => console.log(this));

// box.addEventListener("click", function() {
//   console.log("Fisrt this");
//   console.log(this);
//   setTimeout(function() {
//     console.log("Second this");
//     console.log(this).bind(this);
//   }, 500);
// });

box.addEventListener("click", function() {
    console.log("Fisrt this");
    console.log(this);
    setTimeout(() => {
      console.log("Second this");
      console.log(this);
    }, 500);
  });

// const color = "RED";
// function printColor(color) {
//   console.log(color);
// }

// box.addEventListener("click", function() {
//   const color = "GREEN";
//   printColor(color);
//   setTimeout(function() {
//     printColor(color);
//   }, 500);
// });

//IIFE Immediately Invoked Function Expression

// function sayPrivet () {
//     console.log("privet")
// }

// const sayPrivet = function () {
//     console.log("privet")
// }

// const fib = function fibonacci(){
//     // fibonacci
// }

// const sayPrivet = () => console.log("privet");

// sayPrivet();

// (function(){
//     console.log('IIFE classical')
// })();

(function(){
    console.log('IIFE classical var 1')
}());

(function(){
    console.log('IIFE classical var 2')
})();

(function namedFunction(){
    console.log('named function')
})();

(function football() {
    var players;
    var score;
    
    launch();

    function launch(){
        players = 11;
        score = '1:0'
    }
})();

(function IIFE(msg, times){
    for (i=1;i<=times;i++){
        console.log(msg);
    }
})('Privet', 10)

(function($, global, document){
    //$ for JQuery
    //global = window
})(jQuery, window, document);




















