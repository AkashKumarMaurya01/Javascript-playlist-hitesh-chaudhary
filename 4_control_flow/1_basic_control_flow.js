// if ->control flow 

/*
const loggedin = true
if(loggedin)
{
    console.log("User logged in ");
}

let temp = 45

if(temp <= 43)
{
    console.log("temperature is less than" , temp);
}
else
{
    console.log(`temperature is more than ${43}`);
}

// control flow operators 
// < , > , <= , >= , == , != , ===(also called strictly equal to also check the data type between comparison value )

// short hand notation for if else  
let score = 100

if(score >50) console.log(`score is  ${score}`);
*/

// muktiple check statement 
/*

let balance = 1000;

if(balance < 500)
{
    console.log("balance is less than 500");
}
if(balance < 750)
{
    console.log("balance is less than 750 ");
}
else if (balance < 900)
{
    console.log("balance is less  than 900");
}
else 
{
    console.log("balance is less or equal to " , balance);
}
*/

const userlogged  = true
const debitcard = true
const loggefdifromgoogle = false
const loggedinfromemail = true

if(userlogged && debitcard)
{
    console.log("user is allowed  to buy the course ");
}
if(loggedinfromemail || loggefdifromgoogle)
{
    console.log("use is loggedd in ");
}