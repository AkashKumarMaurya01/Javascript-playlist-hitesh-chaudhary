
// Object literal  ::a list of property names:values inside curly braces {}. 
const User = {
    username: "Akash",
    phone: 61453245,
    detail: "akash kumar maurya",

    getalluser: function () {

        console.log("All user is here with details");
        console.log(this.username);
        console.log(this);
    }

}
/*
console.log(User.username);
console.log(User.detail);
console.log(User.getalluser());
console.log(this);

OUTPUT :

    username:Akash,
    detail:akash kumar maurya,
    getalluser():All user is here with details.
    this:Akash     (inside the getalluser function)
    {
    username: 'Akash',
    phone: 61453245,
    detail: 'akash kumar maurya',
    getalluser: [Function: getalluser]
    },
    this:{} ---> this outwhen this is print outside the class

*/

//+++++++++ Contructure+++++++++++= 

// const PromniseOne = new Promise()
// const date = new Date()



function Nameuser(Name, Phn, IsLoggedIn) {
    this.Name = Name;
    this.IsLoggedIn = IsLoggedIn;
    this.Phn = Phn;

    return this
}


const userone = Nameuser("kumar", 1345, false)
const usertwo = Nameuser("Akash", 1, true)
console.log(userone);

/** Get Overridde by second call
    Name: 'Akash',IsLoggedIn: true,Phn: 1 
*/
console.log(usertwo);
/**
   Name: 'Akash',IsLoggedIn: true,Phn: 1
*/

// we can easily see that constructor value get overrind which is not good for Programing practice 
// instead we can use new keyword
// not get override by second call

const user_1 = new Nameuser("Akash", 1345, false)
const user_2= new Nameuser("Akash", 4322, true)
console.log(user_1);
// Nameuser { Name: 'Akash', IsLoggedIn: false, Phn: 1345 }  
console.log(user_2);
// Nameuser { Name: 'Akash', IsLoggedIn: true, Phn: 4322 }   

// Note : by just writing new Keyword a instance is created suddenly we calld it empty object('{}')
