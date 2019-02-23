const btn = document.querySelector('button');
btn.addEventListener('click', getData);

const getData = () => {
    console.log('getData');
    fetch('/users')
    .then(res => res.json())
    .then(data => console.log(data));
}