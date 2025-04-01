
// function groupById(users){

   
//   let result= users.reduce((prev,user)=>{
//     prev[user.id]=user;
//     return prev
//    },{})
//    return result
// }

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  
//   let usersById = groupById(users);
//   console.log(usersById)
  
//   /*
//   // after the call we should have:
  
//   usersById = {
//     john: {id: 'john', name: "John Smith", age: 20},
//     ann: {id: 'ann', name: "Ann Smith", age: 24},
//     pete: {id: 'pete', name: "Pete Peterson", age: 31},
//   }
//   */









// function unique(arr) {
//    let temp=[]
//    let result= arr.map(a=>a.includes('H') && temp.push(a))
//    return temp

//   }
  
//   let strings = ["Mare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];


//   console.log(unique(strings))

















// function Shuffle(arr){
//     return arr.reduce((prev, a)=>prev+a.age,0)/arr.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];


// let result=Shuffle(arr);
// console.log(result)








// function Shuffle(arr){
//     for(let i=0;i<arr.length;i++){
//         let j=Math.floor(Math.random()*(i+1));

//         [arr[i], arr[j]]=[arr[j], arr[i]];
//     }
//     return arr;
// }

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let result=Shuffle(arr)
// console.log(result)

// function Shuffle(arr){
//     return arr.sort(()=>Math.random()-0.5)
// }

// let arr=[1,2,3,4,5,6,8]
// let result =Shuffle(arr);
// console.log(result)

// class Calculator{
//      str=''
//      constructor(str){
//         this.str=str;
//      }

//      Calculate(){
//         let arr=this.str.split(' ');
// console.log(arr)
//         let a=Number(arr[0])
//         let operator=arr[1]
//         let b=Number(arr[2])

//         if(!operator || isNaN(a) || isNaN(b)){
//             return NaN
//         }
//         if(String(operator)=='+'){
// return a+b;
//         }else if(String(operator)=='-'){
//             return a-b
//         }else if(String(operator)=='*'){
//             return a*b
//         }else if(String(operator)=='/'){
//             return a/b
//         }

//         // console.log(arr[0])
//         // console.log(arr[1])
//         // console.log(arr[2])
//      }
// }

// const func=new Calculator('405 + 9576')
// const result=func.Calculate();
// console.log(result)

// function filterRangeInPlace(arr, a,b){

//     for(let i=0;i<arr.length;i++){
//         console.log(arr.length)
//         let val=arr[i];

//         if(val<a || val>b){
//             arr.splice(i,1);
//             i--;
//         }
//     }
//     console.log(arr.length)
//     return arr;
// }

// let arr=[2,50,6,3,9,80,56,70,45,90,11,24]

// let result=filterRangeInPlace(arr, 2,9)
// console.log(result)

// function filterRange(arr,a,b){
//     return arr.filter(val=>val>=a && val<=b)
// }

// let arr = [5, 3, 8, 1,4];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered)

// class Calculator{
//     str=''
//     constructor(str){
//         this.str=str
//     }

//     calculate(str){
//        let newArr=str.split('+')
//         let tem=0
//         for(let each of newArr){
//             tem+=Number(each);
//         }
//         return tem;
//     }
// }

// const nCal=new Calculator('20+30+40')
// let result=nCal.calculate()
// console.log(result)

// function filterInPlace(arr,a,b){

//     for(let i=0;i<arr.length;i++){
//         let val=arr[i]

//         if(val<a || val>b){
//             arr.splice(i,1)
//             i--
//         }
//     }
//     return arr
// }

// let arr=[1,4,3,6,5,8,9,6]
// let a=2, b=8;

// let result=filterInPlace(arr,a,b)
// console.log(result)

// function camelCase(str) {
//   return str
//     .split("-")
//     .map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)))
//     .join("");
// }

// let result=camelCase('background-color')
// console.log(result)

// let army={
//     minAge:18,
//     maxAge:60,
//     canJoin(user){
//         return user.age>this.minAge && user.age<this.maxAge;
//     }
// }

// const users=[
//     {age:51},
//     {age:15},
//     {age:21},
//     {age:32},
//     {age:11},
//     {age:70},
//     {age:75},
// ]

// let result=users.filter(army.canJoin, army)
// console.log(result)

// let arr=[3,1,6,87,8,9,0,-5];

// console.log(Array.isArray({}))
// console.log(Array.isArray([]))

// console.log((typeof {})==(typeof []))

// let result=arr.reduce((acc, cur)=>acc+cur)
// let result=arr.reduce((acc, cur)=>acc+cur,0)
// console.log(result)

// let str='Adiyat is watching mobile right now';
// string split methor return an array now
// let result=str.split(' ');

// console.log(result)
// from arr to string by join method ok
// let finalR=result.join('<<')
// console.log( typeof finalR)

// arr.reverse()
// console.log(arr)

// arr.sort((a,b)=>a.localeCompare(b))
// console.log(arr)

// function compare(a,b){
//     if(a>b)return 1;
//     if(a==b) return 0;
//     if(a<b) return -1;
// }

// arr.sort(compare)
// descending order
// arr.sort((a,b)=>b-a)
// console.log(arr)
// shallow sort
// arr.sort()
// console.log(arr)
// deep sort now okay
// arr.sort((a,b)=>a-b)
// console.log(arr)

// transform method map here

// let arr=[1,'sharif', 'monir', 'alom',2,3,4,5];
// let result=[]
// arr.forEach(e=>result.push(String(e)))
// result.map(item=>console.log(item.length))

// const users = [
//   { id: 1, name: "Shariful Islam" },
//   { id: 2, name: "Hasan Arif" },
//   { id: 3, name: "Mohasin Alom" },
//   { id: 5, name: "Adiyat Islam" },
// ];

// use find method for single and use filter method for many items here okay man
// let user=users.filter(user=>user.id<4)
// let user=users.findIndex(user=>user.id==5)
// let user=users.find(user=>user.id==5)
// console.log(user)

// let arr = [1, 2, 3,1,4,3,1];

// console.log(arr.lastIndexOf(1))

// searching method of an array

// indexof , lastindexof and includes

// console.log(arr.lastIndexOf())
// console.log(arr.indexOf(3))
// console.log(arr.includes(1))

// arr.forEach((curr, index, arr)=>{
//     console.log(`${curr} value and at ${index} index from ${arr} array`)
// })

// arr.forEach(console.log), currentvalue, index, array
// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]

// let arrayLike={
//     0:"Something now",
//     1:"This is not fair",
//     [Symbol.isConcatSpreadable]:true,
//     length:2
// }
// let result=arr.concat(arrayLike)

// console.log(result[3])
// console.log(arr.concat(arrayLike))
// console.log(arr.length)
// console.log(arr)

// let arr=['x','y','a','t','m','p','j','r']

// let num=[1,2,4,5,6,7,8,9]

// concat method here adding multiple arrays and element now

// console.log(arr.concat(num,'I am shariful Islam'))

// for(let i=1;i<=arr.length;i+=2){
//     const temp=arr.slice(i-1,i+3)
//     console.log(temp)
// }

// let part=arr.slice(2,5)
// console.log(part)
// console.log(part.length)
// console.log(arr)
// console.log(arr.length)

// let arr=[2,32,3,43,4]

// arr.splice(-2,0,100,300,500)
// console.log(arr)

// with one command deletion and insertion is completed with special splice method of array

// arr.splice(1,3,'sharif')
// console.log(arr)

// let insertion=arr.splice(1,0,"sharif", "adiyat")
// insertion return nothing
// console.log(insertion)
// length of insertion is 0
// console.log(insertion.length)
// inset in arr two element successfully
// console.log(arr)

// let result=arr.splice(2,3)
// console.log(result)
// console.log(typeof result)
// console.log(result.length)

// arr.splice(1,Infinity)
// console.log(arr)
// console.log(arr.length)

// arr.splice(2,4)
// console.log(arr)
// console.log(arr.length)

// arr.splice(2,2)
// console.log(arr)
// console.log(arr.length)

// delete arr[1]
// console.log(arr)
// console.log(arr.length)
