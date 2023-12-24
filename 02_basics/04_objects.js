const tinderUser = new Object()
tinderUser.id="123"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"avinash",
            lastName:"singh"
        }
    }
}

//console.log(regularUser.fullname.userfullname)

const obj1={1: "a" ,2: "b"}
const obj2={3: "a" ,4: "b"}

//const obj3={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)

//3rd method using spread operator
const obj3 = {...obj1 , ...obj2}
console.log(obj3)


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'))

const course = {
    coursename: "trade with me",
    price: "999",
    courseInstructor: "avinash"

}

//course.courseInstructor
//De-structuring
const {courseInstructor:instructor } = course

console.log(instructor)