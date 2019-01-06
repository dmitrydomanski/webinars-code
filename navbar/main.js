

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
        
    }

    var heading = document.querySelector('h1');
    heading.textContent = 'Lorem Ipsum';
})


// alert('it works');