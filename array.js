// maximum sum of subarray


// fast method O(n)

// function Msum(arr){
//     let sum=0;
//     let partialSum=0;
    
//     for(let i=0;i<arr.length;i++){
//         partialSum+=arr[i]
//         sum=Math.max(sum, partialSum);
//         if (partialSum<0) partialSum=0
//     }
//     return sum
// }

// let result=Msum([-5,8,9,8,7,-10])
// console.log(result)





// slow method O(n^2)

// function MSum(arr){
//     let sum=0;
    
    
//     for(let i=0;i<arr.length;i++){
//         let fixedSum=0;
//         for(let j=i;j<arr.length;j++){
//             fixedSum+=arr[j]
//             sum=Math.max(sum, fixedSum)
            
//         }
//     }
//     return sum
// }

// let result=MSum([-1,-5,6,8,9,7,-3])
// console.log(result)



// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// function sumInput(){
//     let numbers=[]
    

//     while(true){

//         let input=prompt('please input value',0)


//         if(input=="" ||input==null || !isFinite(input) ) break;
//         numbers.push(Number(input))
//     }
//     let sum=0;
//     for( let value of numbers){
//         sum+=value
//     }
//     return sum;
// }


// sumInput()



// let arr=['a','b']
// arr.push(function(){
//     return this
// })


// console.log(arr[2]())





// Create an array styles with items “Jazz” and “Blues”.
// let array=["Jazz", "Blues"]
// console.log(array)
// Append “Rock-n-Roll” to the end.
// array.push("Rock-n-Roll")
// console.log(array)
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// array[1]="Classics"
// console.log(array)
// Strip off the first value of the array and show it.
// array.shift()
// console.log(array)
// Prepend Rap and Reggae to the array.
// array.unshift('Rap', 'Reggae')
// console.log(array)






// console.log(0=='')

// console.log(0==[])
// console.log([]==0)


// let arr=[1,2,3,4]
// console.log(arr[1]==arr[1])
// console.log([0]==[0])


// console.log(''+1)
// console.log('1'+1)
// console.log('12'+1)
// console.log(Number('1')+1)



// 2D array
// let mamtrix=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
// ]

// for(let i=0;i<mamtrix.length;i++){
//     // console.log(mamtrix[i])
//     for(let j=0;j<mamtrix[i].length;j++){
//         console.log(mamtrix[i][j])
//     }
// }




// console.log(mamtrix[0][1])




// let num=[1,2,3]
// console.log(num=='1,2,3,4')




// let num=[1,2,3,4,5];
// let arr=['orange','fruits', 'banana']

// let i=0;

// let first=arr[0]
// console.log(first.length)


// using do while loop
// do{
//     console.log(arr[i])
//     i++
// }while(i<arr.length)



// let i=0;
// while(true){
//     if(i>=arr.length){
// break;
//     }
//     console.log(arr[i])
//     i++
// }

// let i=0;
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for(let one in num){
//     console.log(one)
// }
// for(let one of num){
//     console.log(one)
// }

// arr referencing
// let arr2=arr
// console.log(arr==arr2)
// arr.push(3)
// console.log(arr)
// console.log(arr2)
// console.log(arr===arr2)







// array can store any type of data

// let arr=['Orange', {name:"Sharif"}, function(){console.log('Hello world')}]

// shift or remove from the begining 
// let first=arr.shift()
// console.log(first)
// console.log(arr)

// unshift or adding new element at the beginning
// arr.unshift('be cool man')
// console.log(arr)




// push or add element from back
// arr.push('adiyat')
// arr.push('nazmul')
// arr.push('ashia')
// arr.push('mamun')


// console.log(arr)

// pop or remove element from back
// const elem=arr.pop()
// const elem1=arr.pop()
// console.log(elem)
// console.log(elem1)
// console.log(arr)




// arr[arr.length-1]()
// console.log(arr.at(1).name);



// console.log(arr[1].name);


// console.log(arr);
// arr[2]();















// let arr=new Array();
// let arr1=['Apple','Orange','Palm']
// console.log(typeof arr)
// console.log(arr1);
// console.log(arr1[2]);
// console.log(arr1.length);
