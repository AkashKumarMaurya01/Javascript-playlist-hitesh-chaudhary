// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh() //hitesh is present in all objects
myHeros.hitesh()//hitesh is present in all objects
myHeros.heyHitesh() //Hitesh says hello
// heroPower.heyHitesh() //TypeError: heroPower.heyHitesh is not a function
 //Note:: just bcz array is lower prototype than function or abject that y array cant inject a new prototype into the object but object can inject we see above 



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // ++++++++++++++++++++++++inheritance++++++

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax of inheritacne 
Object.setPrototypeOf(TeachingSupport, Teacher)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// we are careating own method for finding the actual lenght of string 


let anotherUsername = "Akash kumar mauray               "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

/**
 *""  all output 
  
 hitesh is present in all objects
hitesh is present in all objects
Hitesh says hello
Akash kumar mauray
True length is: 18
hitesh
True length is: 6
iceTea
True length is: 6 */

