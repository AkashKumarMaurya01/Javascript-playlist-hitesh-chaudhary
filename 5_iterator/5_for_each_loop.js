const lang = [1,2,3,4,5,6]
/**

// simple for each loop using fuction 
lang.forEach( function(val){
    console.log(val);
})

//output
1
2
3
4
5
6

* /



// arrow fuction in for each loop 
lang.forEach((val)=>{
    // console.log(val);
} )
//output
1
2
3
4
5
6



function print(item)
{
    // console.log(item);
}

lang.forEach(print);
//output
1
2
3
4
5
6
*/


/*
 
lang.forEach((i , index , arr )=>{
    console.log("value" , i, "index", index ,"array", arr);
})

//output


value 1 index 0 array [ 1, 2, 3, 4, 5, 6 ]
value 2 index 1 array [ 1, 2, 3, 4, 5, 6 ]
value 3 index 2 array [ 1, 2, 3, 4, 5, 6 ]
value 4 index 3 array [ 1, 2, 3, 4, 5, 6 ]
value 5 index 4 array [ 1, 2, 3, 4, 5, 6 ]
value 6 index 5 array [ 1, 2, 3, 4, 5, 6 ]

*/

const coding_lang = [
    {
        languaname:"CPP",
        languanamefull:"C plus plus"
    },
    {
        languaname:"PY",
        languanamefull:"PYTHON"
    },
    {
        languaname:"JAVA",
        languanamefull:"JAVA"
    }
]
 coding_lang.forEach((item)=>{
    console.log(( item.languaname + ":-> " + item.languanamefull));
    
 })
