var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black"
width_of_line = 2;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
color=document.getElementById("color").value
width_of_line=document.getElementById("width_of_line").value
radius=document.getElementById("radius").value
mouseEvent="mouseDown"
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_position_of_x = e.clientX - canvas.offsetLeft;
current_position_of_y = e.clientY - canvas.offsetTop;

if (mouseEvent =='mouseDown'){
    ctx.beginPath();
     console.log("last position of x and y cordinates =");
console.log("x ="+ last_position_of_x + "y ="+ last_position_of_y );
ctx.beginPath();
ctx.strokeStyle=color;
ctx.linewidth=width_of_line;
ctx.arc(current_position_of_x,current_position_of_y,radius,0,2 * Math.PI);
ctx.stroke();
}

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{

    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{

    mouseEvent="mouseleave";
}
function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

























