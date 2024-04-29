// *************DATES**************


let mydate = new Date();

console.log( "this is the first dates" + mydate);                         //2024-04-12T14:24:22.083Z
console.log(mydate.toString());              //Fri Apr 12 2024 19:54:22 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString());        //12/04/2024, 19:55:02
console.log(mydate.toLocaleDateString());    // 12/04/2024
console.log(typeof mydate);                  // object 

// customised date
let newcreatedate = new Date(2023, 0, 20);
console.log(newcreatedate.toDateString());  //Fri Jan 20 2023
let newdate = new Date(2024, 1, 23, 5, 34)
console.log(newdate.toDateString());        //Fri Feb 23 2024

let tempdate = new Date("2024-01-4")
console.log(tempdate.toLocaleString); //Fri Feb 23 2024


// comparison of dates  

let currtime = Date.now();
console.log(currtime);          //1712933679089 are in ms
console.log(tempdate.getTime());//1704306600000 are in ms 

// change the ms into second 

let timestamp = Date.now();
console.log("ms to second " +   Math.floor(timestamp/1000));


let datecurr = new Date();

console.log(datecurr.getDay());
console.log(datecurr.getDate())
console.log(datecurr.getMonth());
console.log(datecurr.getFullYear());
console.log(datecurr.getHours());
// output
// 5
// 3
// 2024 


datecurr.toLocaleString('default' , {
    weekday:"long",
    dateStyle:"full",
    year:"numeric"

})
