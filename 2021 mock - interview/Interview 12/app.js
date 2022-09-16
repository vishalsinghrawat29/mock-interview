var inputTxt = document.querySelector(".input-txt");
var guessTxt = document.querySelector(".guess-txt");
var submitBtn = document.querySelector(".submit-btn");
var validateBtn = document.querySelector(".validate-btn");
var outputBox = document.querySelector(".output-box");

function submitBtnEventListener(){
    var url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";
    var urlTxt = url + inputTxt.value;
    fetch(urlTxt)
    .then((res) =>res.json())
    .then((data) => {
        outputBox.innerText = data.otp;
    })
}

function validateBtnEventListener(){
    if(outputBox.innerText === guessTxt.value){
        outputBox.innerText = "Success";
    }else{
        outputBox.innerText = "failure";
    }
}

submitBtn.addEventListener("click" , submitBtnEventListener)
validateBtn.addEventListener("click" , validateBtnEventListener)