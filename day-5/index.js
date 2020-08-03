var slider = document.getElementById('slider')

var canvas, ctx, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false;

var x = "black",
y = 2;

function init() {
canvas = document.getElementById('can');
ctx = canvas.getContext("2d");
// canvas.width = '100%'

function resetScale(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    w = canvas.width;
    h = canvas.height;
    
}


resetScale()

window.addEventListener('resize' , ()=>{
resetScale()
})

canvas.addEventListener("mousemove", function (e) {
    findxy('move', e)
}, false);
canvas.addEventListener("mousedown", function (e) {
    findxy('down', e)
}, false);
canvas.addEventListener("mouseup", function (e) {
    findxy('up', e)
}, false);
canvas.addEventListener("mouseout", function (e) {
    findxy('out', e)
}, false);
}

function color(obj) {
switch (obj.id) {
    case "green":
        x = "green";
        document.querySelector('#green').style.transform ='scale(1.5)'
        document.querySelector('#blue').style.transform ='scale(1)'
        document.querySelector('#red').style.transform ='scale(1)'
        document.querySelector('#yellow').style.transform ='scale(1)'
        document.querySelector('#orange').style.transform ='scale(1)'
        document.querySelector('#black').style.transform ='scale(1)'
        document.querySelector('#white').style.transform ='scale(1)'

        break;
    case "blue":
        x = "blue";
        document.querySelector('#green').style.transform ='scale(1)'
        document.querySelector('#blue').style.transform ='scale(1.5)'
        document.querySelector('#red').style.transform ='scale(1)'
        document.querySelector('#yellow').style.transform ='scale(1)'
        document.querySelector('#orange').style.transform ='scale(1)'
        document.querySelector('#black').style.transform ='scale(1)'
        document.querySelector('#white').style.transform ='scale(1)'
        break;
    case "red":
        x = "red";
        document.querySelector('#green').style.transform ='scale(1)'
        document.querySelector('#blue').style.transform ='scale(1)'
        document.querySelector('#red').style.transform ='scale(1.5)'
        document.querySelector('#yellow').style.transform ='scale(1)'
        document.querySelector('#orange').style.transform ='scale(1)'
        document.querySelector('#black').style.transform ='scale(1)'
        document.querySelector('#white').style.transform ='scale(1)'
        break;
    case "yellow":
        x = "yellow";
        document.querySelector('#green').style.transform ='scale(1)'
        document.querySelector('#blue').style.transform ='scale(1)'
        document.querySelector('#red').style.transform ='scale(1)'
        document.querySelector('#yellow').style.transform ='scale(1.5)'
        document.querySelector('#orange').style.transform ='scale(1)'
        document.querySelector('#black').style.transform ='scale(1)'
        document.querySelector('#white').style.transform ='scale(1)'
        break;
    case "orange":
        x = "orange";
        document.querySelector('#green').style.transform ='scale(1)'
        document.querySelector('#blue').style.transform ='scale(1)'
        document.querySelector('#red').style.transform ='scale(1)'
        document.querySelector('#yellow').style.transform ='scale(1)'
        document.querySelector('#orange').style.transform ='scale(1.5)'
        document.querySelector('#black').style.transform ='scale(1)'
        document.querySelector('#white').style.transform ='scale(1)'
        break;
    case "black":
        x = "black";
        document.querySelector('#green').style.transform ='scale(1)'
        document.querySelector('#blue').style.transform ='scale(1)'
        document.querySelector('#red').style.transform ='scale(1)'
        document.querySelector('#yellow').style.transform ='scale(1)'
        document.querySelector('#orange').style.transform ='scale(1)'
        document.querySelector('#black').style.transform ='scale(1.5)'
        document.querySelector('#white').style.transform ='scale(1)'
        break;
    case "white":
        x = "white";
        document.querySelector('#green').style.transform ='scale(1)'
        document.querySelector('#blue').style.transform ='scale(1)'
        document.querySelector('#red').style.transform ='scale(1)'
        document.querySelector('#yellow').style.transform ='scale(1)'
        document.querySelector('#orange').style.transform ='scale(1)'
        document.querySelector('#black').style.transform ='scale(1)'
        document.querySelector('#white').style.transform ='scale(1.5)'
        break;
}
if (x == "white") y = 14;
else y = 2;

}

function draw() {
ctx.beginPath();
ctx.moveTo(prevX, prevY);
ctx.lineTo(currX, currY);
ctx.strokeStyle = x;
ctx.lineWidth = y;
ctx.stroke();
ctx.closePath();
}

function erase() {
var m = confirm("Want to clear");
if (m) {
    ctx.clearRect(0, 0, w, h);
    document.getElementById("canvasimg").style.display = "none";
}
}

function save() {
document.getElementById("canvasimg").style.border = "2px solid";
var dataURL = canvas.toDataURL();
document.getElementById("canvasimg").src = dataURL;
document.getElementById("canvasimg").style.display = "inline";
}

function findxy(res, e) {
if (res == 'down') {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;

    flag = true;
    dot_flag = true;
    if (dot_flag) {
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.fillRect(currX, currY, 2, 2);
        ctx.closePath();
        dot_flag = false;
    }
}
if (res == 'up' || res == "out") {
    flag = false;
}
if (res == 'move') {
    if (flag) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        draw();
    }
}
}