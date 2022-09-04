// load, unload
// scroll
// resize
// toggle-details


window.addEventListener("load", function(){
    console.log("load");
})
window.addEventListener("unload", function(){
    console.log("unload");
})
window.addEventListener("scroll", function(){
    console.log("This is scroll here");
})

window.addEventListener("resize",function(){
    var height=this.window.outerHeight;
    var weight=this.window.outerWidth;
    console.log(`height: ${height}, width: ${weight}`);
});
var details=document.querySelector("details");
details.addEventListener("toggle",function(e){
console.log(e.target.open);
})