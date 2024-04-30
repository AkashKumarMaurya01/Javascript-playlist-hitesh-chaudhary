// Singleton object 

const obj1 = new Object(); // this is singleton object

const instauser ={}       // this is non singlton object

instauser.id = "21bcs123"
instauser.name ="Akash"
instauser.email ="akashmaurya09994"

// console.log(instauser) //{ id: '21bcs123', name: 'Akash', email: 'akashmaurya09994' }

//  nested object

const whatapp = {
    email:"akashmaurya@gmail.com",

    facebook:{
        userdetail:{
                firstname:"Akash",
                lastname:"maurya"
        }
    
    },
    age:21,
}
// console.log(whatapp.facebook.userdetail.firstname);

// Object concatination

const ob1 = {1:"a" , 2:"b" }
const ob2 = {3:"a" , 4:"b" }
const ob3 = {5:"a" , 6:"b" }

// const obfinal = {ob1 , ob2 , ob3} // this is not sutaible
// const ob_merge = Object.assign({} , ob1 ,ob2, ob3)
// console.log(obfinal);
// console.log(ob_merge);


const obj_merge = {...ob1,...ob2 ,...ob3}
// console.log(obj_merge); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// console.log(Object.keys(instauser));  //  [ 'id', 'name', 'email' ]
// console.log(Object.values(instauser));//[ '21bcs123', 'Akash', 'akashmaurya09994' ]
// console.log(Object.entries(instauser));

/*
[
    [ 'id', '21bcs123' ],
    [ 'name', 'Akash' ],
    [ 'email', 'akashmaurya09994' ]
  ]

  all we can notice that the data type of the all key values and entries are of array type
  */

//   console.log(instauser.hasOwnProperty('name')); // true if the key is present or not 


const course = {
    coursename :"js in hindi",
    price :999,
    courserInstructor:"histesh",
}
console.log(course.price);

console.log(course.courserInstructor); // every time if we are using this notation the code become little bulky and most top coder use the below method

const {courserInstructor:instructor} = course // this is the short method of using the object entities
console.log(instructor);

/*
 Json code intro only
{
    "name":"Akash",
    "coursename":"js in hindi",
    "price":"free"
}

*/





