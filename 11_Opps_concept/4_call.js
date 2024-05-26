function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  // createUser { username: 'chai', email: 'chai@fb.com', password: '123' }
    SetUsername.call( username) // //    createUser { email: 'chai@fb.com', password: '123' } : without using this keyword reference we refernce  we are getting onnly 

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);