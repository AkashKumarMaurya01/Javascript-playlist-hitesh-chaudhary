//Array 
//---------------------------basic-----------
// const arr1 = [1,2,3,4,5]
// console.log(arr1[3]);
// element of the array can be same type of or different data type

// const arr2 = [2, 3, 4 , "Akash" , true , 5]
// console.log(arr2[3]);

// new other way of declaring data type is 
// const arr3 = new Array(1,2,3,4,'akash')
// console.log(arr3[4]);

//--------------------------Array methods -------------------------------

// arr3.push(6)
// arr3.push(7)
// arr3.pop()
// console.log(arr3);

// arr3.unshift(9)
// console.log(arr3); // output[ 9, 1, 2, 3, 4, 'akash' ]
// arr3.shift();
// console.log(arr3);  //[ 1, 2, 3, 4, 'akash']
 
// unshift and shift are similar like push and pop but from front only 


// console.log(arr3.includes(9))  //output:false
// console.log(arr3.indexOf(4));  // 3

// const arr4 = arr3.join();

// console.log(arr3);//output:[ 1, 2, 3, 4, 'akash' ]
// console.log(arr4);//output:1,2,3,4,akash

// console.log(typeof arr3); //output:object
// console.log(typeof arr4); //output:string

// ------------------------- Slice and splice method----------------------------------------------
// const mainarr = [1,2,3,4,5,6,7]

// console.log("main array   :" + mainarr);

// let temp1 = mainarr.slice(1,4);
// console.log("slice temp1  : "+temp1);
// console.log("main arr     :" + mainarr);

// let temp2 = mainarr.splice(1,4);
// console.log( "splice temp2 : " +temp2);
// console.log( "main array   : " + mainarr);



/*
main array   :1,2,3,4,5,6,7
slice temp1  : 2,3,4
main arr     :1,2,3,4,5,6,7
splice temp2 : 2,3,4,5
main array   : 1,6,7
*/
