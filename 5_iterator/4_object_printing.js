const obj = {
    js:"javascripot",
    cpp:"c plus plus",
    rb:"ruby",
    swift:"swift"
}


// Printing the array 
for (const key in obj) {
    console.log(`key is ${key} and value is ${obj[key]}`);
}
const arr = [1,2,3,5]
for (const i in arr) {
    console.log(i);
   
}

/** Note alert : it is not printing the array element it is only printing the array index 
0
1
2
3
 */


// printing the nested object using foreach loop 

