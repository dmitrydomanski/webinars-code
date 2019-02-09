// this, closure, ES6 new featires 
// * [] Template literals
var  name;
var lasName;
var fullName = name + ' ' + lasName;
const fullNameES6 = `Dear Mr. ${name} ${lastName}!`;

// * [] let & const
const user = {
    name: 'userName',
    lastName: 'useLastName'
}

// * [] Arrow functions

// * [] Destructuring

// const name = user.name;
// const lastName = user.lastName;
// const { name, lastName } = user;

const fullName = `${name} ${lastName}`;

// * [] Default Parameters
function getUser(name, year =2018) {
    return {name, year}
}

const getUser = (name, year = 2018) =>  {return {name, year}}

// * [] Import & Export

// * [] Promises

// * [] Spread operator

const array = [1,2,3,4,5,6];

const newArr = [...array];

const newUser = { ...user, email: 'email'}


export default class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

const esSixUser = new User('Domanski', 'domanski@mail.com');
console.log(esSixUser);



const arr1 = [];
const arr2 = new Array();

// 1. Bubble sort
let bubbleSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 0; i < length; i++){
        console.log(i);
        for(let j =0 ; j < length; j++){
        console.log(j);
            if(inputArr[j] > inputArr[j + 1]){
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[ j + 1] = tmp;
            }
        }
    }
    return inputArr;
}
// 2. this keyword
// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

// 3. JS events and timing

// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4);
// })();

// 4. JS events and timing-2 (what happens on click button #4)

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function(){ console.log(i); });
//     document.body.appendChild(btn);
//   }

// 5. Types coercion

// console.log(false == '0')
// console.log(false === '0')

// 6. Closure

// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b)
//     }
//     inner();
// }
// outer();

// 7. Write a JS program to find the most frequent item of an array

// 8. return a sum of odd fibonacci numbers less than an X number

// 9. Remove duplicate numbers from an array (2 methods)

//10. Generate an array within range increasing by one