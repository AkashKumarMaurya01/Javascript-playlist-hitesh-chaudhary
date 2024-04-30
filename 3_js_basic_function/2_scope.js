if(true)
{
    let a = 10;
    const b = 20;
    var c  = 30;
}
// console.log(a); // a is not defined
// console.log(b); // b is not defined
// console.log(c); // here we can see that the problem with var scope bcz its givoing value out of Scope 

function one()
{
   const Myname = "akash"

    function two()
    {
        const variable = "this"
        console.log( "username" , Myname);
    }
    two()
}
one()

//++++++++++++++++++Function declaration +++++++++++++++++

const val1 = addone(5) // calling the function before declaration 

function addone(nums)
{
    return nums +1;
}
console.log(val1);

//another method of calling a fucntion

const val2 = addtwo(5) //ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(nums)
{
    return nums+2
}
console.log(val2);

