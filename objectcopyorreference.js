//one challenge in the first example let 
user={
    name:"John",
    age:31,
}


let clone={};

for (let key in user){
    clone[key]=user[key];
}

clone.name='Pete';
console.log(clone.name)

//number two challenges 
let user={name:"Sharif"};

let permission1={canView:true};
let permission2={canEdit:false};

let desc=Object.assign(user,permission1,permission2);
console.log(desc);

//number three challenges here 

let user={name:"john"};
Object.assign(user,{name:"Pete"});

alert(user.name);

//number four challenges
// copying object by Object.assign

let user={name:"john", age:32, canTry:true};
let clone=Object.assign({},user);
alert(clone.canTry);


// fifth challenges 
let user={
    name:"john",
    sizes:{
        height:344,
        width:25
    }
}

let clone=Object.assign({},user);

alert(clone.sizes==user.sizes);

clone.sizes.width++;

console.log(clone.sizes.width);

