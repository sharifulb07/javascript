
let arrlike={
    0:'Hello',
    1:'World',
    length:2
}


let result=Array.from(arrlike)
console.log(Array.isArray(result))

console.log(result)



// let str='Hello'

// let iterator=str[Symbol.iterator]()

// while(true){
//     let result=iterator.next();
//     if(result.done) break
//     console.log(result.value)
// }

