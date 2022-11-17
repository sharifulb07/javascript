// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// }
// rabbit._proto_=animal;
// console.log(rabbit.eats);
// console.log(rabbit.jumps);


// let animal={
//     eats:true,
//     walk(){
//         alert("Animal walk");
//     }
// };

// let rabbit={
//     jumps:true,
//     __proto__:animal
// };



// console.log(rabbit.walk());




// let user={
//     name:"shariful",
//     surname:"Islam",
//     set fullName(value){
//         [this.name,this.surname]=value.split(" ");
//     },

//     get fullName(){
//         return `${this.name} ${this.surname}`
//     }
// }


// let admin={
//     __proto__:user,
//     isAdmin:true
// };

// alert(admin.fullName);

// admin.fullName="Alice Cooper";

// alert(admin.fullName);
// alert(user.fullName);



let animal={
    eats:true
};

let rabbit={
    jumps:true,
    __proto__:animal
};

// alert(Object.keys(rabbit));

for(let prop in rabbit) {
    
    let isOwn=rabbit.hasOwnProperty(prop);
    if(isOwn){

        alert(`Our ${prop}`);
    }else{
        alert(`Inherited; ${prop}`)
    }


}