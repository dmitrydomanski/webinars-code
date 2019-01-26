// function example() {for(let i = 0; i<5; i++){
//     let btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button' + i));
//   btn.addEventListener('click', function(){console.log(i)});
//   document.body.appendChild(btn);
//   }}

//   example();

let nameElement = document.getElementById('name');
// if (nameElement) {
//   console.log(nameElement);
// } else {
//   console.log('doesnt exist')
// }

let divs = document.getElementsByTagName('div');
// // console.log(divs);
// for (div of divs) {
//   console.log(div);
// }

let classes = document.getElementsByClassName('class');

let element = document.querySelectorAll('div');
// console.log(element);
const uList = document.querySelector('#list');

uList.innerHTML += '<li>Item 4</li>'
// console.log(uList.innerHTML);

let innerHTML = document.querySelector('#list').innerHTML;
let innerText = document.querySelector('#list').innerText;
// console.log(innerHTML, innerText)

const newItem = document.createElement('li');
// console.log(newItem);
newItem.innerText = 'Item 5';
uList.appendChild(newItem);
nameElement.appendChild(document.createElement('div'));

const listElement = document
.querySelector('li')
.parentElement
.appendChild(document.createElement('li'));
// console.log(uList.lastChild);
uList.lastChild.innerText = 'Item 6';

// document.removeChild(document.querySelector('#name'));

const itemSix = uList.lastChild;
// console.log(itemSix);
// uList.removeChild(itemSix);
// uList.remove();

// document.querySelector('.age').setAttribute('name', 'grownup');

uList.style.color = 'blue';

const age = document.querySelector('.newAge');

console.log(age.getAttribute('class'));

const subHeader = document.createElement('h2');
subHeader.innerText = 'DOM management';
const header=document.querySelector('h1');
// body = document.querySelector('body')
// body.appendChild(subHeader);
// header.parentElement.appendChild(subHeader);
subHeader.insertBefore(nameElement, subHeader.firstElementChild);