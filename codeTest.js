function test(coins,amount){
    var cash=[];
    let total=0;
    for(let i=coins.length-1;i>=0;i--){
        const coin=coins[i];
        while(total+coin<=amount){
    
                cash.push(coin);
            
            total+=coin;
        }
    }
    return cash;

}


//code driver

var coins=[8,6,9,6];
var amount=15;
var result=test(coins,amount);
console.log(result);