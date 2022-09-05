// js constructor function is here

// function Person(first, last, age,eye){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.eyeColor=eye;
// }

// let myDetails=new Person("shariful", "Adiyat",3,"blue");
// console.log(myDetails);

// function Person(first, last, age,eye){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.eyeColor=eye;
//     this.name=function(){
//         return this.firstName+" "+this.lastName;
//     },
//     this.changeName=function(value){
//         this.lastName=value;
//     }
// }

// let myDetails=new Person("shariful", "Adiyat",3,"blue");
// console.log(myDetails.name());
// console.log(myDetails.changeName("Islam"));
// console.log(myDetails.name());

// Built-in JavaScript Constructor

// let bJsC1=new String();
// let bJsC2=new Number();
// let bJsC3=new Boolean();
// let bJsC4=new Object();
// let bJsC5=new Array();
// let bJsC6=new RegExp();
// let bJsC7=new Function();
// let bJsC8=new Date();

// console.log("string  "+typeof bJsC1);
// console.log("number  "+typeof bJsC2);
// console.log("boolen  "+typeof bJsC3);
// console.log("object  "+typeof bJsC4);
// console.log("Array  "+typeof bJsC5);
// console.log("regexp  "+typeof bJsC6);
// console.log("function  "+typeof bJsC7);
// console.log("date  "+typeof bJsC8);



// recommended using literals;

// let bJsC1="";
// let bJsC2=0;
// let bJsC3=false;
// let bJsC4={};
// let bJsC5=[];
// let bJsC6=/()/;
// let bJsC7=function(){};

// console.log("string  "+typeof bJsC1);
// console.log("number  "+typeof bJsC2);
// console.log("boolen  "+typeof bJsC3);
// console.log("object  "+typeof bJsC4);
// console.log("Array  "+typeof bJsC5);
// console.log("regexp  "+typeof bJsC6);
// console.log("function  "+typeof bJsC7);



// js prototype property allows you to add new properties to object
// var all=document.getElementById("demo");

// function Person(first,last,age,eyeCoor){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.eyeColor=eyeCoor;
// }


// Person.prototype.nationality="English";

// Person.prototype.desc=function(){
//     return this.firstName+" "+this.lastName;
// }

// const mySelf=new Person("Shariful", "Islam",34,"blue");
// console.log(mySelf.desc());