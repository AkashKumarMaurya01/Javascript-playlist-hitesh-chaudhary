const holly_heros = ["thor" , "heros" , 'spiderman']

const desi_heros = ["saktiman" ,"krish" , "nagraj"]

// holly_heros.push(desi_heros)
// console.log(holly_heros);
// o/p = [ 'thor', 'heros', 'spiderman', [ 'saktiman', 'krish', 'nagraj' ] ]


// const all_hero = holly_heros.concat(desi_heros)
// console.log(all_hero);
//o/p:[ 'thor', 'heros', 'spiderman', 'saktiman', 'krish', 'nagraj' ]


// Spread method (...)  it works same as concatination in simpler way  

// const all_new_heros = [...holly_heros , ...desi_heros]
// console.log(all_new_heros)

// o/p:[ 'thor','heros','spiderman', 'saktiman', 'krish','nagraj' ]

// -------------------flatining the array element 


// let arr1 = [1,2,3,[3,,4,6] , 8 , 9 , [4,5,6,9, [ 9, 10 , 11 ,12 ]] , 2 ]

// let arr2  =  arr1.flat(Infinity)
// console.log(arr2); 
//output 
/*
[
   1,  2, 3, 3, 4, 6,  8,
   9,  4, 5, 6, 9, 9, 10,
  11, 12, 2
]
*/

// isArray("XYZ") method 


// console.log(Array.isArray("Akash"));//false

// console.log(Array.from("Akash")); //[ 'A', 'k', 'a', 's', 'h' ]

// let arr3 = Array.from("Akash")
// console.log(Array.isArray(arr3)); //true


console.log(Array.from({name:"Akash"})); // return [] bcz we have to specify key(name) or value("Akash") conversion to array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1 ,score2 , score3));//[ 100, 200, 300 ]
