
// draw the board, initially at 50

let padSize = 50;
let sketchPad = document.querySelector("#sketchPad");

function drawBoard(padSize) {

    for (let i = 0; i < padSize; i++) {
        let newDiv = document.createElement("div");
            newDiv.id = "div" + i;
            newDiv.className = "cell";
    
        sketchPad.appendChild(newDiv);
    };
};

drawBoard(padSize);

// Allow user to change board size

let rangeSlider = document.getElementById("sliderRange");

let output = document.getElementById("boardSizeNumberDisplay");

output.textContent = rangeSlider.value;

rangeSlider.oninput = function () {

    output.textContent = this.value;

    //remove old board

    let boardCellsToRemove = document.querySelectorAll(".cell");
    for (i = 0; i < boardCellsToRemove.length; i++) {
        boardCellsToRemove[i].remove();
    }

    padSize = this.value;

    drawBoard(padSize);

};

