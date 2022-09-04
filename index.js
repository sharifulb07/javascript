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

// var video=document.querySelector("#myvideo");
// video.addEventListener("canplay",function(){
//     alert("Can I play this video");
// })

// var input=document.querySelector("input");
// input.addEventListener("change", takeInput);
// function takeInput(){
//     var x=document.querySelector("p");
//     x.innerHTML=input.value.toLowerCase();
// }
// input.addEventListener("click", takeUpper);
// function takeUpper(){
//     var x=document.querySelector("p");
//     x.innerHTML=input.value.toUpperCase();
//     x.style.scale="500px";
//     x.style.color="white";
//     x.style.backgroundColor="tomato";
//     x.style.width="500px";
//     x.style.height="400px";
//     x.style.borderRadius="10px";
//     x.style.padding="15px";
//     x.style.paddingTop="250px";
//     x.style.paddingLeft="250px";
//     x.style.fontSize="40px";

// }


// var input=document.querySelector("input");
// input.addEventListener("copy", takeInput);

// function takeInput(){
//     var para=document.querySelector("p");
//     input.style.backgroundColor="olive";
//     para.innerHTML="You have copied  "+input.value;
// }
// var input=document.querySelector("input");
// input.addEventListener("cut", takeInput);

// function takeInput(){
//     var para=document.querySelector("p");
//     input.style.backgroundColor="blue";
//     para.innerHTML="You have copied  "+input.value;
// }
// document.addEventListener("dragstart",dragStart);
// document.addEventListener("dragover", dragging);
// document.addEventListener("dragstart",dragStart);


// function dragStart(event){
//     event.dataTransfer.setData("Text", event.target.id);
// }
// function dragging(event){
//     document.getElementById("demo").innerHTML="The p element is being dragged";
// }
// function AllowDrop(event){
// event.preventDefault()
// }
// function drop(event){
//     event.preventDefault();
//    var data= event.dataTransfer.getData("Text");
//     event.target.appendChild(document.getElementById(data));
//     document.getElementById("demo").innerHTML="The p element was dropped";
// }

document.addEventListener("dragstart",function(event){
    event.dataTransfer.setData("Text",event.target.id);
});
document.addEventListener("dragenter",function(event){
    if(event.target.className=="droptarget"){
        document.getElementById("demo").innerHTML="You have enter into the dropzone";
        event.target.style.backgroundColor="lightblue";
    }
});

document.addEventListener("dragover",function(event){
    event.preventDefault();
});

document.addEventListener("dragleave",function(event){
    if(event.target.className=="droptarget"){
        document.getElementById("demo").innerHTML="You have enter into the dropzone";
        event.target.style.backgroundColor="";
    }
});
document.addEventListener("drop",function(event){
    event.preventDefault();
    if(event.target.className=="droptarget"){
        
        event.target.style.backgroundColor="";
        var data=event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));

    }
});





