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


// let value = prompt("Enter radius of circle")
    
// const radiusPara = document.querySelector("#radius");
// console.log(radiusPara)
// const resultPara = document.querySelector("#result");
// console.log(resultPara)

// function calcCircArea(radius){
//     if(isNaN(radius)){

//         // alert("NOT A NUMBER")
//         radiusPara.textContent += radius
//         resultPara.textContent = `ERROR radius cannot be calculated`

//     }
//     else{

//         result = (Math.pow(radius,2)) * Math.PI
//         // alert(`The result is: ${result.toFixed(2)}`)
//         radiusPara.textContent += radius
//         resultPara.textContent = `The result is: ${result.toFixed(2)}` 
//     }

// }

// calcCircArea(value)

let ulList = document.querySelector(".shopping")

function addToList(ShopList){
    for(let item of ShopList){

        const newLi = document.createElement("li");
        ulList.appendChild(newLi);
        newLi.textContent = item;

    }
}

let myList = ['bread','cheese','peppers']

addToList(myList)
