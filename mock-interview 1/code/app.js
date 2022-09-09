var inputTxt = document.querySelector(".input-txt");
var h1Btn = document.querySelector(".h1-btn");
var h2Btn = document.querySelector(".h2-btn");
var h3Btn = document.querySelector(".h3-btn");
var outputBox = document.querySelector(".output-box");

var object1 ={
    name : "vishal",
    age : 21,
}
var object2 ={
    name : "kushal",
    age : 19,
}

function h2BtnEventHandler(){
    outputBox.innerText = "Object1 name is " + object1.name +" age is " + object1.age;
}


function h1BtnEventHandler(){
    outputBox.innerHTML = "<h1>" +inputTxt.value + "</h1>";
    outputBox.style.padding = "2rem";
    outputBox.style.border = " 1px solid red"
    outputBox.style.visibility = "hidden";
    console.log(inputTxt.value)
}

// function h1BtnEventHandler(){
//     outputBox.innerHTML = "<h1>" +inputTxt.value + "</h1>";
//     console.log(inputTxt.value)
// }

// function h1BtnEventHandler(){
//     outputBox.innerHTML = "<h1>" +inputTxt.value + "</h1>";
//     console.log(inputTxt.value)
// } 

h1Btn.addEventListener("click" , h1BtnEventHandler);
h2Btn.addEventListener("click" , h2BtnEventHandler);
// h3Btn.addEventListener("click" , h3BtnEventHandler);