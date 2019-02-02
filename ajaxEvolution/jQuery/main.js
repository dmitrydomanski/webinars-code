$(document).ready(()=>{
    const clientKey = 'bd35f5076fc927e2180588a2611955c5cfdd7dbfdb1c4916831d0f5de6778264';
    const url = 'https://api.unsplash.com/search/photos/?query=home';
    $('button').click(()=>{
        $.ajax({
            beforeSend: (request) => {
                request.setRequestHeader("Authorization", `Client-ID ${clientKey}`)
            },
            url: url,
            type: 'GET',
            success: (result) => {
                        const image = document.querySelector('img');
                        image.src = result.results[3].urls.small;
                        image.style.display = 'block';
        },
            error: () => console.log(error)
        });
    })
});
    