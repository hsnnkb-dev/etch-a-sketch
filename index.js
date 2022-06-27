const mainDiv = document.getElementById("container");
//console.log(mainDiv);

for (let i=0; i<=15; i++) {
    let div = document.createElement("div");
    //console.log(i);
    mainDiv.appendChild(div);
}

function changeColor(e) {
    //console.log(e);
    e.target.classList.add('black');

}

let divs = mainDiv.querySelectorAll("div");
console.log(divs);

divs.forEach(div => {
    div.addEventListener("mouseover", changeColor)
});