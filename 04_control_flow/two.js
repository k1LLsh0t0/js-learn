//Array specific loop

//For-Of loop

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num)
// }
// const greetings = "hello world"
// for (const greet of greetings)
// {
//     console.log(`each char is ${greet}`)
// }

//Maps:STORES UNIQUES KEY:VALUE PAIRS

const map = new Map()
map.set('IN', "INDIA")
map.set('FR', "FRANCE")
map.set('BR', "BRAZIL")

for (const [key,value] of map){
    console.log(key," :- " , value);
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'GTA'
// }
// for (const [key,value] of myObject){
//     console.log(key," :- " , value);
// }

//Object is not iterable

