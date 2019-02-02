// request.onreadystate = handleRequest;
// request.send();

// function handleRequest(){
    //     console.log(request.responseText);
    // }
    
    const clientKey = 'bd35f5076fc927e2180588a2611955c5cfdd7dbfdb1c4916831d0f5de6778264';
    const url = 'https://api.unsplash.com/search/photos/?query=home';

    function sendRequest() {
        const request = new XMLHttpRequest();
        request.onreadystatechange = handleRequest;
        request.open('GET', url, true);
        request.setRequestHeader('Authorization', `Client-ID ${clientKey}`);
        request.send();

function showRandom() {
    return Math.floor(Math.random()*10)
}

        function handleRequest() {
            if(this.readyState === 4 && this.status === 200){
                const response = JSON.parse(request.responseText);
                const image = document.querySelector('img');
                const index = showRandom();
                image.src = response.results[index].urls.small;
                image.style.display = 'block';
            }
        }
    }

    const btn = document.querySelector('button');
    btn.addEventListener('click', sendRequest);
    

    // readyState
    //status 200, 300, 400, 500


    