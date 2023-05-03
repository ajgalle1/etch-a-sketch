
// get requested board side from user

let rangeSlider = document.getElementById("sliderRange");

let output = document.getElementById("boardSizeNumberDisplay");

output.textContent = rangeSlider.value;

rangeSlider.oninput = function () {
    output.textContent = this.value;
}

// draw the board
let sketchPad = document.querySelector("#sketchPad");
for (let i = 0; i <= 100; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = "div" + i;
    newDiv.className = "cell";
    newDiv.textContent = newDiv.id;

    sketchPad.appendChild(newDiv);
};
