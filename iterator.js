







let set=new Set(["oranges", "apples", "bananas"]);


// console.log(set.entries())
// console.log(set.keys())
// console.log(set.values())


// for(let value of set){
//     console.log(value)
// }

// set.forEach((value, valueAgain,set)=>{
// console.log(set, value)
// })



// let set=new Set()
// let john={name:"John"}
// let james={name:"James"}
// let mary={name:"Mary"}


// set.add(john)
// set.add(james)
// set.add(mary)

// console.log(set.size)

// for(let user of set){
//     console.log(user.name)
// }















// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
//   console.log(typeof prices)




// let obj={
//     name:"Shariful",
//     age:121
// }


// let newMap=new Map(Object.entries(obj))

// console.log(Map.toString())

// console.log(newMap.get('name'))
// console.log(newMap.get('age'))





// Iteration over Map

// let receipeMap=new Map([
//     ['cucumber', 50],
//     ['tomatoes',300],
//     ['onion',205]
// ])


// map entries
// for(let key of receipeMap.entries()){
//     console.log(key)
// }

// map values

// for(let key of receipeMap.values()){
//     console.log(key)
// }

// map keys
// for(let key of receipeMap.keys()){
//     console.log(key)
// }




// let sharif={name:"Sharif"}
// let map=new Map();
// map.set(sharif,123455)
// map.set(sharif,1255)
// console.log(map)





// we can set any type of data in datastore now 
// Map data structure here user creating Map, size delete, get, set, has, delete clear
// let map=new Map();

// map.set(1,'Number');
// map.set('1',"String");
// map.set(true,Boolean)

// console.log(map.get(true))
// console.log(map.size)
// console.log(map.has(5))
// console.log(map.has(1))
// console.log(map.delete(1))
// console.log(map.has(1))

// map.clear()

// console.log(map.size)






// let values={
//     1:"number",
//     '1':'string'
// }

// console.log(values[1])











// function slice(str, start, end){
//     return Array.from(str).slice(start,end).join(' ');
// }


// let str='𝒳😂𩷶';
// let arr=str.split('')

// console.log(arr)

// console.log(slice(str,0,1))
// console.log(str.slice(1,3))






// let str='𝒳😂';
// let char=[];

// for(let c of str){
//     char.push(c)
// }

// console.log(char)









// let range={
//     from:1,
//     to:15,

//     [Symbol.iterator](){
//         this.current=this.from;
//         return this;
//     },
//     next(){
//         if(this.current<=this.to){
//             return{done:false, value:this.current++}
//         }else{
//             return {done:true}
//         }
//     }


// }

// let arr=Array.from(range, num=>num+1)

// console.log(arr)





// let arrlike={
//     0:'Hello',
//     1:'World',
//     length:2
// }


// let result=Array.from(arrlike)
// console.log(Array.isArray(result))

// console.log(result)



// let str='Hello'

// let iterator=str[Symbol.iterator]()

// while(true){
//     let result=iterator.next();
//     if(result.done) break
//     console.log(result.value)
// }

