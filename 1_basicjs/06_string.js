const name = "Akash"

const cnt = 45

// console.log(name + cnt + "value"); this is old method and we do not use to prefer 

console.log(`hello my name is ${name} and the repocont is ${cnt}`);

const MYname = new String("Akash_kumar")

console.log(MYname[0]);
console.log(MYname.__proto__);
console.log(MYname.length);

console.log(MYname.toUpperCase());
console.log(MYname.charAt(2));
console.log(MYname.indexOf('r'));


console.log(MYname.substring(4, 7 )); 
// here 4 is starting index of the strign and 7 is ending index of the string and 7 is not included 
// substring([starting index , ending_index))

const str = MYname.substring(4 , 7);
console.log(str);


//A intresting method is slice 

const newstring = MYname.slice(0 , 4);
console.log(newstring);

// trim method in javascript :=> it simply remove the extra spaces from the given string 

    const Name = "    sundaram    "
    console.log(Name);         //    sundaram
    console.log(Name.trim());  //sundaram

// Replace method of string in javascript 

      const url = "https://google.com/font%20size"

    // here replace(kyahatana h  serach karke , replace kisse karnaa hai  )
     console.log(url.replace('/' , '-'));
    // output :=> https://google.com/font-size

// there a another method called include 

   console.log(url.includes("goole"));

    //    it simply gived true or false if the value in string is present in the give url string 


// there is a new method name Split 

const temp = new String("hi i am Akash kumar maurya where i am doing my job")

console.log(temp.split(" "));
// output of the spilt on the basis of " "

/*
[
  'hi',    'i',
  'am',    'Akash',
  'kumar', 'maurya',
  'where', 'i',
  'am',    'doing',
  'my',    'job'
]*/ 