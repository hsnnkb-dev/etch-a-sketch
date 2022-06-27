const mainDiv = document.getElementById("container");
let divs = "";
//console.log(mainDiv);

function changeColor(e) {
    //console.log(e);
    e.target.classList.add('black');

}

function addColour() {
    divs = mainDiv.querySelectorAll("div");
    divs.forEach(div => {
        div.addEventListener("mouseover", changeColor)
    });
}


function createGrid(number) {
    let newWidth = (number * 102);
    mainDiv.style.width = newWidth + "px";

    for (let i=0; i<number; i++) {
        for (let j=0; j<number; j++) {
            let div = document.createElement("div");
        //console.log(i);
        mainDiv.appendChild(div);
        }
    }
    addColour();
}

function resetGrid() {
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
}

function setGrid() {
    let userInput = window.prompt("Enter a number: e.g. '4' creates a 4*4 grid with 16 squares. Max size = 10", 4);
    if (userInput > 10) {userInput = 10};
    if (userInput < 1) {userInput = 1};
    resetGrid();
    createGrid(userInput);
}

function initialGrid(number) {
    createGrid(number);
    addColour();
}

initialGrid(4);