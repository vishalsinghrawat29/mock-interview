var inputTxt = document.querySelector(".input-txt");
var checkBtn = document.querySelector(".check-btn");
var outputBox = document.querySelector(".output-box");

function checkBtnEventHandler(){
    var inputTxtValue = inputTxt.value;
    if(inputTxtValue.length > 10){
        outputBox.innerText = "success";
        inputTxt.style.border = "1px solid green";
    }else{
        outputBox.innerText = "error";
        inputTxt.style.border = "1px solid red";
    }

}

checkBtn.addEventListener("click", checkBtnEventHandler);
