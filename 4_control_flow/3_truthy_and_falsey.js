const useremail = "Akash@gmail.com"
if(useremail)
{
    console.log("got user email"); //got user email
}
else
{
    console.log("dont have user email");
}

// falsey value 
    //false , 0 , -0 , BigInt 0n , "" , null , NaN  , undefined

// truthy value 
    //  "0" , 'false' , " " , [] , {} , function(){} 


if(useremail.length===0)
{
    console.log("Array is emoty");
}

const emptyobj = {}
if(Object.keys(emptyobj).length==0) 
{
   console.log("object is empty"); //object is empty
}

//++++++++++++++++++++ NUllish coalescing Operator (??): null ,  undefined

let val;
// val = 55??10;
// console.log(val); //55

// val = null??13
// console.log(val); // 13 

// val  = 12 ?? 14 ?? 15
// console.log(val); // 12 
 
// NOtes: NUllcolescing operator is what to do is .. it basically assign a a value in case a null or undefined value is coming and we also have another value other than null or undefinded then it assign that value to val 


//++++++++++++Ternary operator++++++++++++++
 
// condition ?true :false  syntax

const price =100

price>=80 ? console.log("Price is greater than 80"):console.log("price id less than 80");;