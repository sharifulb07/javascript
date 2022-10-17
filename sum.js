// function sum(a,b){
//     return a+b;
// }

// console.log(sum(100,500,600,800));


// function sumAll(...args){
//     let sum=0;
//     for(let arg of args) sum+=arg;
//     return sum;
// }

// console.log(sumAll(20,50,40,60,70,80));


// function Showname(firstName, lastName,...titles){
//     console.log(firstName+" "+lastName);

//     for(let names of titles){
//         console.log(names);  
//     }
  
// }


// Showname("hasan", "Rafiq","Sumon", "Diham","kushol","Hridoy");



// var arr=[10,20,30,50,90,100];
// console.log(Math.max(arr));
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));



// var arr=[1,5,9,6,-7,-3,0,-8];
// var arr1=[10,-2,90,60,30,70,-5];

// console.log(Math.max(...arr,...arr1));
// console.log(Math.max(...arr,...arr1,5000));
// console.log(Math.min(...arr,...arr1));

var arr=[1,5,9,6,-7,-3,0,-8];
var arr1=[10,-2,90,60,30,70,-5];
var mersed=[0,...arr,...arr1,100];
console.log(mersed);