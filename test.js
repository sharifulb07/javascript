function trySort(arr){
    var result=[];
    var total=0;
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i]=="number"){
            result.push(arr[i]);

        }else if(result.length>=1){
            if(arr[i]=="C"){
                result.pop();
            }else if(arr[i]=="D"){
                let temp=arr[i]*2;
                result.push(temp);
            }
        }else if(result.length>=2){
            if(arr[i]=="+"){
            let db=arr[i-1]+arr[i-2];
            result.push(db);
            }
        }
    }
    result.map(el=>{
        total+=el;
    })
    return total;
}



var arra=[5,7,"C","D",10,11,"+",12];
console.log(trySort(arra));