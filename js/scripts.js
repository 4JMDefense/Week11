let fname = prompt("Name:")
let ctime = prompt("Time:")

function greet(name, time = "Morning"){
    console.log(`Good ${time} ${name}!!`)
}

greet(fname,ctime)

// let username = prompt("Enter your name")

// let greet = (name) => {
//     console.log(`HI! ${name}`)
// }

// greet(username);