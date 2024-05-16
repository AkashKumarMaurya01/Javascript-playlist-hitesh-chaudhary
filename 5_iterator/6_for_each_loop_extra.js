// Use of for each loop 

/*
const arr = [1, 2, , 3, 4, 5, 6, 7, 8, 9, 10]
    const new_arr1 = arr.forEach((num)=>{
    return num>4
    })
    const new_arr2 = arr.forEach((num)=>num>4)

    console.log(new_arr1);
    console.log(new_arr2);
*/

// Foreach loop do not return any value still if u make return code 

// ++++++++++++++++++++++++++++++ Filter() method +++++++++++++++++++++
/*
    const new_arr3 = arr.filter((val)=>val>4)
    const new_arr4 = arr.filter((val)=>{
        return val>4
    })
// both filter method work exactly same 
    console.log(new_arr3); 
    console.log(new_arr4); 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//other way using a new array 
    const new_arr5 = []
    arr.forEach((val) => {
        if (val > 4) {
            new_arr5.push(val)
        }
    })

    console.log(new_arr5);

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const user_book1 = books.filter((book)=>book.genre=='History');
const user_book2 = books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre=='History'
})
console.log(user_book1);
console.log(user_book2);
/*
  output
  user_book1:
  [ 
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
   user_book2:
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
] */