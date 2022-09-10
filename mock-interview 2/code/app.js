var inputTxt =document.querySelector(".input-txt");
var outputBox = document.querySelector(".output-box");

outputBox.innerText = 10 ;
function inputTxtEventHandler(){
    var inputTxtLength = inputTxt.value.length;
    var currentLength = 10 - inputTxtLength;
    outputBox.innerText = currentLength ;
    if(currentLength < 0){
        outputBox.style.color ="red";
    }else{
        outputBox.style.color ="black";
    }
}

inputTxt.addEventListener("change" , inputTxtEventHandler);