// Stack(Primitive: String,Number,Boolean,BigInt,Null,Undefined,Symbol)   , Heap(Reference or Non- Primitive:Array,Object,Functions)

let myYoutubename = "avinashSingh.com"

let anothername = myYoutubename
anothername = "singh.com"

console.log(myYoutubename)
console.log(anothername)

let userOne= {
    email : "avinashgoogle.com",
    id : "1"
}
let userTwo = userOne

userTwo.email="singh@google.com";

console.log(userTwo)
console.log(userOne)