



// let str="this is adiayt who is enjoying mobile screen"

// console.log(Array(3).fill(str).join(" "))

// console.log(str.repeat(2,''));


// function extractCurrencyValue(str){
//   let num=Number(str.slice(1));
//   return num
// }



// console.log(extractCurrencyValue('$120')==10)

// function truncate(str, maxLength){
//   return (str.length>maxLength)? str.slice(0, maxLength-1)+"...":str;
// }




// let result=truncate('This is shariful islam', 10)
// console.log(result)


// function ucFirst(str){
//   if(!str) return str;
  
//   return str[0].toUpperCase()+str.slice(1)

// }


// function ucFirst(str){
//   let sub=str.slice(1, str.length)
//   console.log(sub)
//   let result=str[0].toUpperCase()+sub
//   console.log(result);
  
//   return result;

// }


// const result=ucFirst('shariful')
// console.log(result)






// let str=''

// for(let i=65;i<123;i++){
//   str+=String.fromCodePoint(i)
// }

// console.log(str);
// console.log(str.length);





// console.log('a'.codePointAt(0))
// console.log('A'.codePointAt(0))

// console.log('b'.codePointAt(0))
// console.log('c'.codePointAt(0))
// console.log('d'.codePointAt(0))
// console.log('Y'.codePointAt(0))

// console.log('Z'.codePointAt(0))

// console.log(String.fromCodePoint(121))
// console.log(String.fromCodePoint(90))

// comparison two strings

// console.log('a'>'Z')
// console.log('a'<'Z')

// console.log("osterriech"<"Zealand")

// let str='This is stringify'

// console.log(str.slice(1,6));
// console.log(str.substring(6,11));
// console.log(str.substr(6,11));

// let str="All well that's ends well now"

// console.log(str.startsWith('all'))
// console.log(str.endsWith('now'));

// let str="Widget is with id"

// console.log(str.includes('ids',1));

// console.log(str.includes('with'))

// let str='As sly as a fox , as strong as a ox'
// let target='as'

// console.log(str.lastIndexOf(target,2))

// let pos=-1;

// while((pos=str.indexOf(target,pos+1)) !=-1){
//   console.log(pos);

// }

// while(true){
//   let foundAs=str.indexOf(target,pos)
//   if(foundAs==-1) break;
//   console.log(`Found at: ${foundAs}`)

//   pos=foundAs+1
// }

// let name='This is shariful islam who is a man'

// console.log(name.indexOf('is',1))
// console.log(name.indexOf('is',2))
// console.log(name.indexOf('is',3))
// console.log(name.indexOf('is',4))

// let str='H'+name[2]
// console.log(str)

// console.log("INTERFACE".toLocaleLowerCase())
// console.log('this is lowercase'.toUpperCase());
