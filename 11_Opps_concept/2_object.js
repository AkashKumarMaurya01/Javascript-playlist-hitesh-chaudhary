function addtwo(a ,b)
{
    return a+b
}
addtwo.pow = 3;
console.log(addtwo(2,4)); //6 
console.log(addtwo.pow); // 3 
console.log(addtwo.prototype); //{}

// Note:function is  referncial type of object it can behave like a object 

//+++++++ Recent created object call :: means use of new keyword


function User(name , score)
{
    this.name = name
    this.score = score
}
User.prototype.increament = function()
{
    this.score++;
}
User.prototype.PrintMe  = function()
{
    console.log(`the chai score is ${this.score}`);
}
const first = new User("Akash" , 25)
first.increament();
first.PrintMe();
const seond = new User("Amit" , 250)

seond.PrintMe();


/*
 ++++++++++++++++++Functionality of new keyword++++++++++++++++
 
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

