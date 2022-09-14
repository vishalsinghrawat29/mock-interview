var inputTxt = document.querySelector(".input-txt");
var submitBtn = document.querySelector(".submit-btn");
var outputBox = document.querySelector(".output-box");

function submitBtnEventLisnter(){
    var url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";
    var name = inputTxt.value;
    var urlName = url + name;
    fetch(urlName)
    .then(response => response.json())
    .then(json => console.log(json.otp.split("-")[1]));
}

submitBtn.addEventListener("click", submitBtnEventLisnter);