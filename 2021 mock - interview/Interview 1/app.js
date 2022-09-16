var incBtn = document.querySelector(".inc-btn");
var decBtn = document.querySelector(".dec-btn");
var outputBox = document.querySelector(".output-box");

outputBox.innerText = 0;

function incBtnEventListner(){
    var outputValue = outputBox.innerText;
    outputValue = Number(outputValue) + 1;
    outputBox.innerText = outputValue;
}

function decBtnEventListner(){
    var outputValue = outputBox.innerText;
    outputValue = Number(outputValue) - 1 ;
    outputBox.innerText = outputValue;
}

incBtn.addEventListener("click", incBtnEventListner);
decBtn.addEventListener("click", decBtnEventListner);