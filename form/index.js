const form=document.querySelector("form");
const name=form.querySelector("div #name");
const password=form.querySelector("div #password");
const email=form.querySelector("div #email");


var submit=form.querySelector("#submit");


form.addEventListener("submit", submitHadler);

function submitHadler(e){
    e.preventDefault();
    
   var userInfo={
    name:name.value,
    password:password.value,
    email:email.value
   }
   console.log(userInfo);

   name.value="";
   password.value="";
   email.value="";
}