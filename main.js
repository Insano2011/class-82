mouseEvent=""
var color="black" 
var width=2
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d")

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color= document.getElementById("color").value;
    width= document.getElementById("width_of_line").value;

    mouseEvent="mouseDown"
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp"
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave"
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_X=e.clientX-canvas.offsetLeft;
    current_Y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_X,last_Y)
        ctx.lineTo(current_X,current_Y);
        ctx.stroke()
    }
    last_X=current_X;
    last_Y=current_Y;

}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}