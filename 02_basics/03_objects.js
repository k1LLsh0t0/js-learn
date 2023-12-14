// singleton 

//object literals 
//Ways to define Objects


// Object.create


//Declare a Symbol and print it 
const mySym = Symbol("key1")

const JsUser = {
    name: "Avinash",
    "full name": "Avinash Singh",
    [mySym]: "mykey1",
    email: "real.avi987@gmail.com",
    age: 18,
    location: "varanasi",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) //to access line no 9 we use this  

// console.log(JsUser[mySym])

// JsUser.email = "avinash@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "avinash@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


