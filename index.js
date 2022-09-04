// const div=document.querySelector("div");
// const p=document.querySelector("p");
// const h1=document.querySelector("h1");
// const code=document.querySelector("code");
// const myid=document.querySelector("#head-id");
// const myclass=document.querySelector(".myclass");

// div.addEventListener("mouseover", function(){
//     console.log("this div section where you is overing your mouse icon");
//     div.innerHTML="new div section";
// })

// p.addEventListener("mouseover", function(){
//     console.log("this p section where you is overing your mouse icon");
//     p.attributes="height:150px; ";
// })

// h1.addEventListener("mouseover", function(){
//     console.log("this h1 section where you is overing your mouse icon");
//     h1.style.color="olive";
//     h1.style.fontSize="60px";
// })

// myid.addEventListener("mouseover", function(){
//     console.log("this id section where you is overing your mouse icon");
// })
// myid.addEventListener("mouseover", function(){
//     console.log("this class section where you is overing your mouse icon");
// })
// code.addEventListener("mouseover", function(){
//     console.log("this code section where you is overing your mouse icon");
// })


var button=document.querySelector("button");

// // button.setAttribute("id","myId");


// // console.log(button.id);


var newPara=document.createElement("p");
newPara.innerHTML="this is newer paragraph here we thaht why ";

var Para=document.createElement("p");
newPara.innerHTML="Environment ";
button.appendChild(newPara);


document.addEventListener("click",function(){
    
    button.removeChild(newPara);
})





