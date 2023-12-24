function(){
console.log("A")
console.log("V")
console.log("I")
console.log("N")
console.log("A")
console.log("S")
console.log("H")
}


function addTwoNumbers(number1, number2){

    let result = number1 + number2;
    return result
}

const result = addTwoNumbers(3,5)

console.log("result: ", result);


//example 2 
//we have to print in log while calling the function to actually print things

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("avinash"))