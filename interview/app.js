var inputTxt = document.querySelector(".input-txt");
var outputBox = document.querySelector(".output-box");

function inputTxtEventHandler(){
    outputBox.innerText = inputTxt.value;
    if(inputTxt.value.length > 5){
        outputBox.style.color = "red";
    }
}

inputTxt.addEventListener("input", inputTxtEventHandler);