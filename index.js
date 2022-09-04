var country=document.querySelector("#country");
document.addEventListener("input",function(){
    var x=country.value;
    document.getElementById("demo").innerHTML="You wrote: "+x;
})