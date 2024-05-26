//  +++++++++++++++Promise One++++++++++++++

const PromiseOne = new Promise(function (resolve, reject) {
    // Do any Async task 
    // DB calls , cryptogaphy , network

    setTimeout(() => {
        console.log("Asyns one is completed");
        resolve()
    }, 1);
})
//++++++++++++Promise two+++++++++
PromiseOne.then(function () {
    console.log("ASync 1 is resolved");
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async two is completed");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 is resolved");
})

// +++++++++++ Promise three ++++++++++

const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async three is complited");
        resolve({ userName: "Akash", email: 'akashmaurya09994@gmail.com' })
    }, 1000);
})

PromiseThree.then(function (userdetail) {
    console.log("Async 3 is resolved");
    console.log(userdetail);
})


//++++++++++++ promise four +++++++++++++++


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let erorr = true;
        if (!erorr) {
            resolve({ userNam: "AKash", password: 123 })
        }
        else {
            reject("ERROR : something went wrong:")
        }
    }, 1000);
})
promiseFour.then(function (username) {
    console.log(user);
    return user.userNam;   // this return user.userNam is catched by another the function : we call it chaning

}).then(function (username) {
    console.log(username)
}).catch(function (error) {
    console.log(error);
}).finally(() =>
    console.log("Finally either promise is resolve or rejected")
)

//++++++++++++++++++++ Promise 5 ++++++++++

// Async await 

const Promisefive = new Promise(function (resolve, reject) {
    setTimeout(() => {

        let error = true;
        if (!error) {
            resolve({ userdetail: " PROMISE 5 gauri baburi", password: 1243 })
        }
        else {
            reject("Promise 5 ERROR:js went wrong")
        }

    }, 1000);
})
async function PromiseFiveConsumer() {
    try {
        const response = await Promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
PromiseFiveConsumer()


// +++++++++++++++++++ fetch() ++++++++++++


// async function Getalluser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error", error);
//     }

// }

// Getalluser()


// Same above code using then catch method 

fetch('https://jsonplaceholder.typicode.com/users').
then(function(result)
{
    return result.json()

}).then(function(result)
{
    console.log(result);
}).catch((error)=>
{
    console.log(error);
})