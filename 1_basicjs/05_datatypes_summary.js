//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions



//   const heros = ["saktiman" , "krish" , "naagraj "]
//   let obj = {
//        name:"Akash",
//        age:23,
//   }

//   const myfunction = function()
//   {
//     console.log("hello world");
//   }

//   console.log(typeof scoreValue)      //number
//   console.log(typeof outsideTemp);    //object
//   console.log(typeof userEmail);      //  undefined
//   console.log(typeof heros);         //object
//   console.log(typeof myfunction);    //function
//   console.log(typeof obj);           //object
  
  
  
  
  
  

// https://262.ecma-international.org/5.1/#sec-11.4.3


//   ************************ MEMRTY ALLOCATION ***********************
 
// Stack ::(Prmitive data type)      heap:: (Non-Primitive datatype)

let Myage = 21

let frndage  = Myage
frndage = 45

 console.log(Myage);
 console.log(frndage);

//  the value in primitive datatype uses stack and the its do not change the actual value or the main value



// here the non primitive data type uses heap if the change in any reference then the change occur in main value 
let userOne = { 
    Email:"my.com",
    age: 232
}

let usertwo = userOne

usertwo.Email ="Akashmaurya";

console.log(userOne.Email);
console.log(usertwo.Email);

// output here u can easily see the change in the value in both either we only make change in the usertwo email 

        // Akashmaurya
        // Akashmaurya

        