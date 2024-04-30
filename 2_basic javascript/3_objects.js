// singleton

// objects literals
let mykey = Symbol("key1")
const Jsuser = {
    name:"Akash",
    age:21,
    location:"banaras",
    islogged:true,
    logged_days:['Monday' , 'tuesday', 'Friday'],
    email:"akash@gmail.com",
    "full name":"Akash kumar maurya",
    [mykey]:"key2" , // here this way we refer to the above declared symbol
}
/*
console.log(Jsuser.name);          //Akash
console.log(Jsuser["email"]);      //akash@gmail.com 
console.log(Jsuser["full name"]);  //Akash kumar maurya

console.log(Jsuser[mykey]);         //key2 

console.log(typeof mykey);         //symbol
*/
//To change the object value in the above declared object

Jsuser.email = "akashmaurya09994@gmail.com"
console.log(Jsuser.email);  //akashmaurya09994@gmail.com

// Now we want to freez the value of the object so we use the freez method 

// Object.freeze(Jsuser)  // we can easily see that after freezing the object we can not make change in the any object element 
Jsuser.email = "afdsafsvv" 
// console.log(Jsuser);

// Function in js

Jsuser.func1 = function()
{
    console.log("Namastey duniya");
}
//o/p :Namastey duniya
      // undefined
Jsuser.func2 = function()
{
    console.log(`hello dosto  i am ${this.name} , and you can call me by my name`);
}

console.log(Jsuser.func1());
console.log(Jsuser.func2());