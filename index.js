const mainDiv = document.getElementById("container");
console.log(mainDiv);

for (let i=0; i<=15; i++) {
    let div = document.createElement("div");
    console.log(i);
    mainDiv.appendChild(div);
}