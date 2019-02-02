const clientKey =
  "bd35f5076fc927e2180588a2611955c5cfdd7dbfdb1c4916831d0f5de6778264";
const url = "https://api.unsplash.com/search/photos/?query=home";

function sendRequest() {
  fetch(url, {
    method: "GET",
    headers: { Authorization: `Client-ID ${clientKey}` }
  })
  .then(res => res.json())
  .then(result => {
    const image = document.querySelector('img');
    image.src = result.results[showRandom()].urls.small;
    image.style.display = 'block';
  });
  
}

function showRandom() {
    return Math.floor(Math.random()*10)
}

const btn = document.querySelector('button');
btn.addEventListener('click', sendRequest);