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

// let ulList = document.querySelector(".shopping")

// function addToList(ShopList){
//     for(let item of ShopList){

//         const newLi = document.createElement("li");
//         ulList.appendChild(newLi);
//         newLi.textContent = item;

//     }
// }

// let myList = ['bread','cheese','peppers']

// addToList(myList)

// function squarelistMaker ()
// {
//     const ulList = document.querySelector(".shopping.circleList");
//     ulList.classList.remove("circleList");
//     ulList.classList.add("squareList");
// }
// squarelistMaker();

// const image = document.querySelector("#shoppingCart")

// function updateimg()
// {
//     image.setAttribute("alt", "Shopping cart image")
//     image.setAttribute("width", 300)
//     image.setAttribute("lenght", 300)
// }

// updateimg();


function cTextGreen()
{
//1. find alll li queryselectorall()
//2. loop through li's
//3. get text content
//4. check if textcontent contains green
const listItems = document.querySelectorAll("li")

    for (let item of listItems)
    {
        const text = item.textContent
        if (text.includes("green"))
        {
            item.setAttribute("style", "color:green")
        }

    }
    
}

cTextGreen();