//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions



  const heros = ["saktiman" , "krish" , "naagraj "]
  let obj = {
       name:"Akash",
       age:23,
  }

  const myfunction = function()
  {
    console.log("hello world");
  }

  console.log(typeof scoreValue)      //number
  console.log(typeof outsideTemp);    //object
  console.log(typeof userEmail);      //  undefined
  console.log(typeof heros);         //object
  console.log(typeof myfunction);    //function
  console.log(typeof obj);           //object
  
  
  
  
  
  

// https://262.ecma-international.org/5.1/#sec-11.4.3