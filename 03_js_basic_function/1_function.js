function printmyname()
{
    console.log('A');
    console.log('K');
    console.log('A');
    console.log('s');
    console.log('H');
}
// printmyname()

function addtwonumber(num1 , num2)
{
     console.log( num1+num2);
}
// addtwonumber(1,3)       // calling addtwonumber() fuction

function addtwonumber(num1 , num2)
{
     return num1+num2;     // returning the value from the fuction
}

const result = addtwonumber(4,5);
// console.log("Result :" +  result);


function Userlogin(unsername)
{
    if(unsername===undefined)
    {
        console.log("please enter the username");
        return
    }
    return `${unsername} just logged in`
}

// console.log(Userlogin("Akash")); //Akash just logged in
// console.log(Userlogin());        //please enter the username
   
/*------------------------- shopping cart ------------


function shopping(...number)
{
    return number;
}

console.log(shopping(1,2,300)); //[ 1, 2, 300 ]

f
unction shopping(n1 , n2 , ...number)
{
    return number;
}

console.log(shopping(1,2,300 , 500 , 600 , 700)); //[ 1, 2, 300 ]

*/

const obj1 = {
    unsername:"badal",
    price:199

}

function handleobject(anyobj)
{
    console.log(`Username is ${anyobj.unsername} and price is ${anyobj.price}`);
}

handleobject(obj1)
handleobject({
    unsername :"Akash",
    price :4555
})

const arr = [200, 400, 600 , 800]

function getSecondval(Arr)
{
    return Arr[1]
}
const val = getSecondval(arr)
console.log(val);

const temp = getSecondval(
    newarr = [300 , 500, 700, 900]
)
console.log(temp);
