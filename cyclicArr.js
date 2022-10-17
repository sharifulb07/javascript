function rotate(){
   var x=arr[arr.length-1],i;

   for(i=arr.length-1;i>0;i--)
        arr[i]=arr[i-1];
    arr[0]=x;


}


var arr=[1,2,3,4,5,6,7,8,9];

console.log("Original array is :");
for(var i=0;i<=arr.length-1;i++){
    console.log(arr[i]+" ");
}
rotate();

console.log("Reversed Array is : ");

for(var i=0;i<=arr.length-1;i++){
    console.log(arr[i]);
}