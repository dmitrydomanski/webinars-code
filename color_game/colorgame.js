function init() {
  const complexity = 9;
  fillInSquares(complexity);
  const colorItems = document.querySelectorAll(".colorItem");
  setColours(complexity, colorItems);
  setComplexityButton(complexity, colorItems);
  setResetButton();
  document.querySelector(".header").style.background = "forestgreen";
  const message = document.querySelector("#message");
}

init();

function setColours(n) {
  const colorItems = document.querySelectorAll(".colorItem");
  paintColorsUp(colorItems);
  const pickedColour = pickColor(colorItems, n);
  checkColor(colorItems, pickedColour);
}

function setResetButton() {
    const reset = document.querySelector("#reset");
    reset.addEventListener("click", () => {
        document.querySelector('#message').textContent = '';
        document.querySelector(".header").style.background = "forestgreen";
        const colorItems = document.querySelectorAll(".colorItem");
        setColours(colorItems.length);
  });
}

//make buttons change the number of squares
function setComplexityButton() {
  const buttons = document.querySelectorAll(".mode");
  buttons.forEach(element => {
    element.addEventListener("click", () => {
      if (element.textContent === "Hard") {
        removeRebuildAndSet(9);
      } else {
        removeRebuildAndSet(6);
      }
    });
  });
}

//create new color layour on button click
function removeRebuildAndSet(complexity) {
  const wrapper = document.querySelector("#colorItems");
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
  fillInSquares(complexity);
  setColours(complexity);
}

//1. Fill in squares
function fillInSquares(num) {
  const wrapper = document.querySelector("#colorItems");
  for (i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.classList.add("colorItem");
    wrapper.appendChild(square);
  }
}

//2. Make the squares colourful
function generateRGB() {
  const rgbModel = [0, 0, 0];
  for (i = 0; i < rgbModel.length; i++) {
    rgbModel[i] = Math.round(Math.random() * 255);
  }
  return `rgb(${rgbModel[0]},${rgbModel[1]},${rgbModel[2]})`;
}

//4. Create picked colour
function paintColorsUp(array) {
  array.forEach(element => {
    element.style.background = generateRGB();
  });
}

//3. Make the squares clickable
function checkColor(array, pickedColour) {
  array.forEach(element => {
    element.addEventListener("click", () => {
      const color = element.style.background;
      //5. Check if the clicked colour is a picked colour
      if (color === pickedColour) {
          //6. Create win-loose behaviour
          message.style.color = "white";
          message.textContent = "SUCCESS";
          changeColors(pickedColour, array);
        } else {
        message.innerText = "TRY AGAIN";
        message.style.color = "red";
        element.style.background = "black";
      }
    });
  });
  array.forEach(element => {
      addEventListener('mouseout', ()=>{
          message.textContent = '';
      })
  })
}

//pick a color to be guessed
function pickColor(array, complexity) {
  const num = Math.round(Math.random() * (complexity - 1));
  const color = array[num].style.background;
  const colorString = `Try to click the square of color ${color}`;
  document.querySelector("#colorDisplay").textContent = colorString;
  return color;
}

//change colors on success
function changeColors(color, array) {
  for (i = 0; i < array.length; i++) {
    array[i].style.background = color;
  }
  document.querySelector(".header").style.background = color;
}
