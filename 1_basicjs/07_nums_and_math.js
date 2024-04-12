//***************************/ Numbers/**************** */ 
/*
const balance = 100
const newbalance = new Number(200)

console.log(balance);     //100
console.log(newbalance);  // [Number: 200]


console.log(balance.toString());        //100
console.log(balance.toString().length); //3

console.log(balance.toFixed(2));       //100.00
console.log(balance.toFixed(1));       //100.0

const num = 123.665
console.log(num.toPrecision(3)); // 124 
console.log(num.toPrecision(2)); // 1.2e+2 gadbad hai=>gadhe 
console.log(num.toPrecision(4)); // 123.7  

const hundread = 10000000000
console.log(hundread.toLocaleString('en-in')); //10,00,00,00,000
console.log(hundread.toLocaleString('en'));    //10,000,000,000
console.log(hundread.toLocaleString('in'));    //10.000.000.000

*/

// ******************************MATHS***************************


/*

console.log(Math);                     //Object [Math] {}
console.log(Math.abs(5-7));            //2 
console.log(Math.round(4.6));          //5
console.log(Math.ceil(4.6));           //5
console.log(Math.floor(4.6));          //4
console.log(Math.min(4 ,5,1,4,6,7,9)); //1
console.log(Math.max(4 ,5,1,4,6,7,9)); //9

*/
// this will give the out in the range of 1 to 10 inclusive
    console.log(Math.random()*10);
    console.log( (Math.random()*10)+1);
    console.log( Math.floor(Math.random()*10)+1);

// but we want output in the range :=> we are now generating the number in range start and end  

const start = 10 
const end = 30

console.log(Math.floor(Math.random()*(end-start)+1)+ start);
// note :=> we are adding the start in the random value bcz we want number more than or equal to start
// we are also adding 1 bcz the value should be greater than 0 