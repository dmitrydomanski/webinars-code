function init(){
    const complexity = 9;
    const colorItems = document.querySelectorAll('.colorItem');
    setColours(complexity, colorItems);
    setComplexityButton(complexity,colorItems);
    document.querySelector('.header').style.background = 'forestgreen';
    setResetButton(colorItems);
    console.log(colorItems);
    const message = document.querySelector('#message');
}

init();

function setColours(n){
    fillInSquares(n);
    const colorItems = document.querySelectorAll('.colorItem');
    paintColorsUp(colorItems);
    const pickedColour = pickColor(colorItems, n);
    checkColor(colorItems, pickedColour);
    
}

function setResetButton(array){
    const reset = document.querySelector('#reset');
    reset.addEventListener('click', () =>{
        paintColorsUp(array);
    })
}

function setComplexityButton(n, array){
    const buttons = document.querySelectorAll('.mode');
    buttons.forEach(element => {
        element.addEventListener('click', ()=>{
            if (element.textContent === 'Hard'){
                complexity = 9;
            } else {
                complexity = 6;
            }
        });
    });
    setColours(n, array);
}

//1. Fill in squares
function fillInSquares(num){
    const wrapper = document.querySelector('#colorItems');
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
            //5. Check if the clicked colour is a picked colour
            if (color === pickedColour) {
                //6. Create win-loose behaviour
                message.style.color = 'white';
                message.textContent = 'SUCCESS';
                changeColors(pickedColour);
            } else {
                message.innerText = 'TRY AGAIN';
                message.style.color = 'red';
                element.style.background = 'black';
            }
        })
    });
}

function pickColor(array, complexity){
    const num = Math.round(Math.random() * (complexity - 1));
    // console.log(array);
    const color = array[num].style.background;
    const colorString = `Try to click the square of color ${color}`
    document.querySelector('#colorDisplay').textContent = colorString;
    return color;
}

// function changeColors(array, color){
    function changeColors(color){
    const colors = document.querySelectorAll('#colorItem');
    // colors.forEach(element => {element.style.background = color});
    for (i=0; i<colors.length; i++){
        colors[i].style.background = color;
    }
    document.querySelector('.header').style.background = color;
}