const arr = [1,2,3,4,5]
let sum=0;
const arr_sum = arr.reduce((accumulator , current_value)=> accumulator+current_value , sum)
console.log(arr_sum);

const arr2=  [
    {
        course:"js",
        price:3999
    },
    {
        course:"French",
        price:4999
    },
    {
        course:"Web dev",
        price:12999

    }
]
const total_sum = arr2.reduce((accum , item)=>accum+item.price , 0);

console.log(total_sum);