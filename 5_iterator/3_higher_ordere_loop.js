// for of loop
/*
const arr = [ 1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}
1
2
3
4
5

+++++++++++++++++++++++++++++++++++++++++++++++

const welcoming = "hello welcomers to out world!"
for (const wlcm of welcoming) {
    console.log(`each char is ${wlcm}`);
}
each char is h
each char is e
each char is l
each char is l
each char is o
each char is
each char is w
each char is e
each char is l
each char is c
each char is o
each char is m
each char is e
each char is r
each char is s
each char is
each char is t
each char is o
each char is
each char is o
each char is u
each char is t
each char is
each char is w
each char is o
each char is r
each char is l
each char is d
each char is !
*/

//MAPS 

// const mp  = new Map()
// mp.set('IN' , 'INDIA')
// mp.set('EN' , 'ENGLAND')
// mp.set('FR' , 'FRANCE')
// mp.set('CH' , 'CHINA')


/*
console.log(mp);
output
Map(4) {
  'IN' => 'INDIA',
  'EN' => 'ENGLAND',
  'FR' => 'FRANCE',
  'CH' => 'CHINA'
} */

//Printing map element using for loop 

// for (const [key , value] of mp) 
// {
//   console.log(` key is ${key} and value is ${value}`);   
// }





/*
//  Notes ==== way of printing the object first and second value 
*/
const obj = {
    name : "Akash",
    age:21,
    class:614
}

// X wrong way of printing the objects value  ---->  this is not the way of iterating the value of the objects we will see later in this playlist
for (const [i,j] of obj) { // obj is not iterable
    console.log(i);
    console.log(j);
}