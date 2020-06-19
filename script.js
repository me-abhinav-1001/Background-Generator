var css = document.querySelector("h3");
var colr1 = document.querySelector(".colr1");
var colr2 = document.querySelector(".colr2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".random");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + colr1.value + "," + colr2.value + ")";

    css.textContent = body.style.background;
}


function rgbToHex(r, g, b) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// body.style.background = "linear-gradient(to right, " + colr1.value + "," + colr2.value + ")";
css.textContent = "linear-gradient(to right, " + colr1.value + "," + colr2.value + ")";;
colr1.addEventListener("input", setGradient);
colr2.addEventListener("input", setGradient);

btn.addEventListener("click", function(){
    colr1.value = rgbToHex();
    colr2.value = rgbToHex();
    console.log(colr1.value);
    console.log(colr2.value);
    body.style.background = "linear-gradient(to right, " + colr1.value + "," + colr2.value + ")";
    css.textContent = "linear-gradient(to right, " + colr1.value + "," + colr2.value + ")";;
})
