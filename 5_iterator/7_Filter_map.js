const arr = [1,2,3,4,5,6,7,8,9,10]

const new_arr1 = arr.map((num)=>num+10)
// console.log(new_arr1);
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

//+++++++chaning++++ of map and filter method in js

const new_arr2 = arr.map((nums)=>nums+1).map((num)=>num*10).filter((val)=>val>=50)

// console.log(new_arr2);
// output:
/*

 [
   50,60,70,80,
   90, 100, 110
 ] 
 
 */
