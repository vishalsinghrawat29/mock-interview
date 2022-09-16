var inputTxt = document.querySelector(".input-txt");
var fiveBtn = document.querySelector(".five-btn");
var tenBtn = document.querySelector(".ten-btn");
var fetchBtn = document.querySelector(".fetch-btn");
var outputBox = document.querySelector(".output-box");


function fiveBtnEventListner(){
    inputTxt.style.borderWidth = "5px";
}
fiveBtn.addEventListener("click", fiveBtnEventListner);


function tenBtnEventListner(){
    inputTxt.style.borderWidth = "10px";
}
tenBtn.addEventListener("click", tenBtnEventListner);


function fetchBtnEventListner(){
    var url = "https://quick-access-api.desaihetav.repl.co/"
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        outputBox.innerText = data.message;
    })
}
fetchBtn.addEventListener("click", fetchBtnEventListner);