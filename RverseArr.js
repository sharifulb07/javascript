function reversedArr(arr,start,end){
   while(start<end){
        var temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
}

function leftRotate(arr,d,n){
    if(d==0)
    return;
  
    d=d%n;

    reversedArr(arr,0,d-1);
    reversedArr(arr,d,n-1);
    reversedArr(arr,0,n-1);
}

function Print(arr){
    for(var i=0;i<arr.length;i++){
            console.log("Reversed Array Value is: "+arr[i]);
    }
}



// driver code

var arr=[1,2,3,4,5,6,7,8,9,10];
var n=arr.length;
var d=4;
leftRotate(arr,d,n);
Print(arr);