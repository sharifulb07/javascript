// const div=document.querySelector("#mydiv");

// window.addEventListener("beforeprint", myprint);

// function myprint(){
//     alert("This is my print here ");
// }
// window.addEventListener("beforeunload", function (event){
//     event.returnValue="This is my print before unloadhere ";
//    });

// var myName=document.querySelector("input");
// myName.addEventListener("blur", function(event){
    
//     console.log("cool works "+event.target.log);
// })

var video=document.querySelector("#myvideo");
video.addEventListener("canplay",function(){
    alert("Can I play this video");
})