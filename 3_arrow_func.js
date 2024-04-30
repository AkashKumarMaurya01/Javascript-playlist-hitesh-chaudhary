/*
const User ={
    username:"Akash",
    tag:"frnd",
    Welcome:function()
    {
          console.log(`${this.username} ,welcome home`);
    }
}

User.Welcome()
User.username='bhaya'
User.Welcome()

function chai()
{
    let myname = "Akash"
    console.log(this.myname); //undefined we can not use this in a function we can only use in objects only 
}
chai()


const chaipi = function()
{
    console.log("Kyu nhi ho rhi padhayi");
}

chaipi()
*/



const chai = ()=>
{
    console.log("Kyu nhi ho rhi padhayi");
}
chai()
// both are working  exactly same 

// some other way of declaring the arrow function 

const addtwo =(nums1, nums2)=>
{
    return nums1+nums2;
}
console.log(addtwo(1,2));

//some other way also there implicit way


const addthree =(n1 ,n2 , n3)=> n1+n2+n3 // or (n1+n2+n3)

console.log(addthree(1,2,3));

const sum  =()=>( { username:"Akash"})

console.log(sum(1,2));


