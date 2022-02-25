// coding challenge one about object

let user={};
user.name="Johhn";
user.surname="Smith";
console.log(user);
user.name="Pete";
console.log(user);

delete user.name;
console.log(user);

// Second challenge here 

let test={};
alert (isEmpty(test));

schedule["8:30"]="get up";
alert(isEmpty(test));

function isEmpty(obj){

    for (let key in obj){

        return false;
    }
    return true;

}


//third challenge
let salaries={
    John:100,
    Ann:160,
    Pete:130
}

let sum=0;

for(let key in salaries){
    sum+=salaries[key];
}

console.log(sum)