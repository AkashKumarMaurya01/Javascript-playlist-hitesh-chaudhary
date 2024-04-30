//Immediately Invoked Function Expression (IIFE)

// new way of calling immediately function : taki hmara local aur global variable pollution na kar sake
(function chai() // name IIFE
{
    console.log(`DB connected`);
})(); // for ending the function we should use the terminator 

(()=>
{
    console.log("db connected two");
})() ;

((name)=>
{
    console.log(`db connected two ${name}`);
})("Akash") ;


