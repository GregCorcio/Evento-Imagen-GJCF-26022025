let maxLeft;
let maxTop;
const minLeft = 0;
const minTop = 0;
let  timeDelta;
let img =[
    "media/img/arboles/arbol1.png",
    "media/img/arboles/arbol2.png",
    "media/img/arboles/arbol3.png",
    "media/img/arboles/arbol4.png",
]
var originalX;
var originalY;

Window.Onload = function(){

document.onmousedown = starrDrag;
document.onmouseup = stopDrag;

}

function sensorClick(){

let p = document.getElementById("popup"):

if(p){
    p.parentNode.removeChild(p);
}

let popup = document.createElement("div");
popud.id = "popup";
popud.className = "popup";
popud.style.top = parent.y - 110 + "px";
popud.style.left = parent.x - 75 + "px";

let text = document.createElement("span")
text.textcontent

}