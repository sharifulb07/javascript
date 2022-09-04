var x=document.querySelector(".mydiv");


function anim(){
    x.style.WebkitAnimation="mymove 4s 3";
    x.style.animation="mymove 5s, 3";

}
// eventListner add here

x.addEventListener("webkitAnimationStart",animStart);
x.addEventListener("webkitAnimationIteration",animIteration);
// x.addEventListener("webkitAnimationEnd",animEnd);

x.addEventListener("animationstart",animStart);
x.addEventListener("animationiteration",animIteration);
// x.addEventListener("animationend",animEnd);

// various animation function

function animStart(){
    this.style.backgroundColor="pink";
    this.innerHTML="animation Starts";
}
function animIteration(){
    this.style.backgroundColor="blue";
    this.innerHTML="animation iteration here";
    this.style.animIteration="inifinite"
}
function animEnd(){
    this.style.backgroundColor="yellow";
    this.innerHTML="animation end";
}