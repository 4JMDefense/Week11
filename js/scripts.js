// let fname = prompt("Name:")
// let ctime = prompt("Time:")

// function greet(name, time = "Morning"){
//     console.log(`Good ${time} ${name}!!`)
// }

// greet(fname,ctime)

// let username = prompt("Enter your name")

// let greet = (name) => {
//     console.log(`HI! ${name}`)
// }

// greet(username);


let value = prompt("Enter radius of circle")
    


function calcCircArea(radius){
    if(isNaN(radius)){

        alert("NOT A NUMBER")

    }
    else{

        result = (Math.pow(radius,2)) * Math.PI
        console.log(`The result is: ${result.toFixed(2)}`)
    
    }

}

calcCircArea(value)