// js object declarations

// const person={
//     firstName:"shariful",
//     lastName:"Islam",
//     age:34,
   
// }
// adding property and delete property
// person.nationality="Bangladeshi";
// person.eyeColor="blue";


// console.log(person["eyeColor"]);
// console.log(person);

// delete person["age"];

// console.log(person);


// let txt="";
// let control=0;
// for(var x in person){
//     txt+=person[x]+" ";
//     if(control==2){
//         txt+"is ";
//     }
//     control++;

// }

// console.log(txt);
// another way to add property with person object;
// person.eyeColor="black";
// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person["eyeColor"]);
// console.log(person["age"]);



// creating object reference here of person

// const x=person;
// console.log(x.firstName);
// console.log(x.lastName);


// nested objects

// const myID={
// name:"Shariful Islam",
// age:34,
// asset:{
//     cars:3,
//     money:"no",
//     ornaments:{
//         price:12000
//     }
// }
// }
// console.log(myID);
// console.log(myID.name);
// console.log(myID.age);
// console.log(myID.asset);
// console.log(myID.asset.cars);

// console.log(myID.asset.ornaments.price);



// const cars={
//     car:"BMW",
//     newCar:"Volvo"
// }

// let x="car";
// const y="car2";
// const z="car3";

// console.log(cars);
// console.log(cars["x"]);

// Nested JavaScript Object and Arrays is here 

// const myObj={
//     name:"John",
//     age:30,
//     cars:[
//         {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//         {name:"BMW", models:["320", "X3", "X5"]},
//         {name:"Fiat", models:[ "500", "Panda"]},

//     ]
// }

// var x=document.getElementById("demo");
// let y="";
// for(let i in myObj.cars){

//     y+="<h1>"+myObj.cars[i].name+"</h1>";
//     for(let j in myObj.cars[i].models){
//         y+=myObj.cars[i].models[j]+"<br>";

//     }
// }

// x.innerHTML=y;
// console.log(y);


// js object methods here

// const person={
//     firstName:"Shariful",
//     lastName:"Islam",
//     id:5566,
//     fullName:function(){
//         return this.firstName+" "+this.lastName;
//     }
// }


// console.log(person.fullName());
// console.log(person.fullName().toUpperCase());


// Displaying Object properties
// const person={
//     name:"John",
//     age:30,
//     city:"New York",
//     date:new Date()
// }
// display js object in json format here 

// const Jdate=JSON.stringify(person.date);
var all=document.getElementById("demo");
// all.innerHTML=Jdate;
// const Jarr=JSON.stringify(person);



// all.innerHTML=Jarr;
// document.getElementById("demo").innerHTML="<h3>"+person.name+
// "</h3>"+" is "+person.age+" years old <br>"+"He lives in "+person.city;


// jSON.Stringify doesn't work in object inner function ;

// const person={
//     name:"John",
//     age:function(){return 30}
// }
// var jf=JSON.stringify(person);
// all.innerHTML=jf;



// const person={
//     name:"John",
//     age:function(){return 34}
// }
// This can be fixed if you convert the functions into strings before stringify

// person.age=person.age.toString();

// let myString=JSON.stringify(person);
// all.innerHTML=myString;


// Stringify Arrays

// const arr=["JOhn", "Peter", "Sally", "Jane"];

// let myString=JSON.stringify(arr);
// all.innerHTML=myString;


// js get or set accessors is here practice 


// const person={
//     firstName:"shariful",
//     lastName:"Islam",
//     language:"Bangla and English",
//     get lan(){
//         return this.language;
//     }
// }

// all.innerHTML=person.lan;

// const person={
//     firstName:"shariful",
//     lastName:"Islam",
//     language:"",
//     set lang(lang){
//         this.language=lang;
//     }
// }


// person.lang="Bangla and English"

// all.innerHTML=person.language;
// const person={
//     firstName:"shariful",
//     lastName:"Islam",
//     language:"",
//     get fullName(){
//         return this.firstName+" "+this.lastName;
//     }
// }


// person.lang="Bangla and English"
// all.innerHTML=person.fullName.toUpperCase();


// const object1={};

// Object.defineProperty(object1,"object1",{
//     value:43,
//     writable:false
// });

// object1.object1=77;

// all.innerHTML=object1.object1;

// const obj={};
// // creating an object using null property

// const descriptor=Object.create(null);
// descriptor.value='static';

// // add property as default here 

// Object.defineProperty(obj,'key',descriptor);

// console.log(obj);

// Object.defineProperty(obj,'key2',{
//     enumerable:false,
//     configurable:false,
//     writable:false,
//     value:'cool'
// })


// console.log(obj.key2);



// // Recling same object

// function withValue(value){
//     const d=withValue.d || (
//         withValue.d={
//             enumerable:false,
//             writable:false,
//             configurable:false,
//             value
//         }
//     );

//     if(d.value!=value) d.value=value;

//     return d;
// }


// Object.defineProperty(obj,"key5", withValue("Adiyat Rahman"))
// if(Object.freeze || Object){

// console.log(obj);
// }
// creating an object and adding writable attribute here 

// creating an empty object here 

// const o={};

// Object.defineProperty(o,"a",{
//     value:37,
//     writable:false
// });

// console.log(o.a);

// o.a=45;
// console.log(o.a);



// strict mode

// (()=>{
//     'use strict';
//     const o={};
//     Object.defineProperty(o,'b',{
//         value:2,
//         writable:false
//     });

//     o.b=3; // throws Type Error: "b" is read-only
//     return o.b;
// })();



// const o={};

// Object.defineProperty(o,'a',{
//     value:1,
//     enumerable:true
// });
// Object.defineProperty(o,'b',{
//     value:2,
//     enumerable:false
// });
// Object.defineProperty(o,'c',{
//     value:3,
    
// });

// o.d=4;

// Object.defineProperty(o, Symbol.for('e'),{
//     value:5,
//     enumerable:true
// });
// Object.defineProperty(o,Symbol.for('f'),{
//     value:1,
//     enumerable:false
// });



// for(const i in o){
//     console.log(i);
// }

// console.log(Object.keys(o));

// console.log(o.propertyIsEnumerable('a'));
// console.log(o.propertyIsEnumerable('b'));
// console.log(o.propertyIsEnumerable('c'));
// console.log(o.propertyIsEnumerable('d'));
// console.log(o.propertyIsEnumerable(Symbol.for('e')));
// console.log(o.propertyIsEnumerable(Symbol.for('f')));


// const p={...o};

// console.log(p.a);
// console.log(p.b);
// console.log(p.c);
// console.log(p.d);
// console.log(p[Symbol.for('e')]);
// console.log(p[Symbol.for('f')]);




function Archiver(){
    let temperature=null;
    const archive=[];

    Object.defineProperty(this,'temperature',{
        
        get (){
            console.log('get');
            return temperature;

        },
        set(value){
            temperature=value;
            archive.push({val:temperature});
        }
    });
    this.getArchive=()=> archive;
}

const arc=new Archiver();
arc.temperature;
arc.temperature=22;
arc.temperature=43;

// getting output here 
console.log(arc.getArchive());
