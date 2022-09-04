// MouseEvent -<html,<head><meta>,<title>,<br>,style,iframe,para, base bd,</title></head>
// onClick
// ondblclick
// onmousedown
// onmouseup
// onmouseenter
// onmouseleave
// onmousemove
// onmouseover


const div=document.querySelector("div");
div.addEventListener("click", function(){
    console.log("click is clicked");
});
div.addEventListener("dblclick",function(){
    console.log("double click is occured");
});
div.addEventListener("mouseover",function(){
    console.log("mouse over is occured");
});
div.addEventListener("mousedown",function(){
    console.log("mousedown is occured");
});
div.addEventListener("mouseenter",function(){
    console.log("mouseenter is occured");
});
div.addEventListener("mouseleave",function(){
    console.log("mouseleave is occured");
});
div.addEventListener("mousemove",function(){
    console.log("mousemove is occured");
});
