canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

var lastPositionOfX;
var lastPositionOfY;
color="black";
width=1;
var width_screen=screen.width;
new_width=screen.width-70;
new_height=screen.height-301;

if(width_screen<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden"
}

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    lastPositionOfX=e.touches[0].clientX-canvas.offsetLeft;
    lastPositionOfY=e.touches[0].clientY-canvas.offsetTop;
} 

 canvas.addEventListener("touchmove", my_touchmove);
  function my_touchmove(e) 
  {
       current_position_of_touches_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touches_y = e.touches[0].clientY - canvas.offsetTop;
          
             ctx.beginPath(); 
             ctx.strokeStyle = color;
              ctx.lineWidth = width;
               console.log("Last position of x and y coordinates = ");
                console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
                 ctx.moveTo(lastPositionOfX, lastPositionOfY); 
                 console.log("Current position of x and y coordinates = "); 
                 console.log("x = " + current_position_of_touches_x + "y = " + current_position_of_touches_y);
                  ctx.lineTo(current_position_of_touches_x, current_position_of_touches_y); 
                  ctx.stroke();
                  lastPositionOfX = current_position_of_touches_x; lastPositionOfY = current_position_of_touches_y; }