var inputTxt = document.querySelector(".input-txt");
var logBtn = document.querySelector(".log-btn");
var errorBtn = document.querySelector(".error-btn");
var warnBtn = document.querySelector(".warn-btn");
var outputBox = document.querySelector(".output-box");

function logBtnEventListner(){
    outputBox.innerText = inputTxt.value;
    outputBox.style.color = "black";
}
logBtn.addEventListener("click", logBtnEventListner)

function errorBtnEventListner(){
    outputBox.innerText = inputTxt.value;
    outputBox.style.color = "red";
}
errorBtn.addEventListener("click", errorBtnEventListner)


function warnBtnEventListner(){
    outputBox.innerText = inputTxt.value;
    outputBox.style.color = "yellow";
}
warnBtn.addEventListener("click", warnBtnEventListner)