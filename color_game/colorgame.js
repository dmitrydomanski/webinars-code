//5. Check if the clicked colour is a picked colour
//6. Create win-loose behaviour
function init(){
    const complexity = 9;
    fillInSquares(complexity);
    const colorItems = document.querySelectorAll('.colorItem');
    paintColorsUp(colorItems);
    const pickedColour = pickColor(colorItems, complexity);
    checkColor(colorItems, pickedColour);
    const message = document.querySelector('#message');
}

init();


//1. Fill in squares
function fillInSquares(num){
    const wrapper = document.querySelector('#colorItemWrapper');
    for (i=0; i<num; i++){
        const square = document.createElement('div');
        square.classList.add('colorItem');
        wrapper.appendChild(square);
    }
}

//2. Make the squares colourful
function generateRGB(){
    const rgbModel = [0, 0, 0];
    for (i=0; i<rgbModel.length; i++){
        rgbModel[i] = Math.round(Math.random() * 255);
    }
    return `rgb(${rgbModel[0]},${rgbModel[1]},${rgbModel[2]}) `
}

//4. Create picked colour
function paintColorsUp(array){
    array.forEach(element => {
        element.style.background = generateRGB();
    });
}

//3. Make the squares clickable
function checkColor(array, pickedColour){
    array.forEach(element => {
        element.addEventListener('click', ()=>{
           const color = element.style.background;
           if (color === pickedColour) {
                message.textContent = 'SUCCESS';
           } else {
            message.innerText = 'TRY AGAIN';
           }
        })
    });
}

function pickColor(array, complexity){
    const num = Math.round(Math.random() * (complexity - 1));
    const color = array[num].style.background;
    document.querySelector('#colorDisplay').textContent = color;
    return color;
}


// document.querySelector('.colorItem').style.background = generateRGB();