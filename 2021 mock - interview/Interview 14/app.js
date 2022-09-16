// // <input type="text" class="input-txt">
// <button class="submit-btn">Submit</button>
// <div class="output-box"></div>

var inputTxt = document.querySelector(".input-txt");
var submitBtn = document.querySelector(".submit-btn");
var outputBox = document.querySelector(".output-box");

function submitBtnEventListener(){
    var inputNumber = Number(inputTxt.value);
    var squareOfNumber = inputNumber*inputNumber;
    var lastDigit = squareOfNumber%10;
    if(lastDigit === inputNumber){
        outputBox.innerText = "Automorphic number";
    }else{
        outputBox.innerText = "Not Automorphic number";
    }
}

submitBtn.addEventListener("click", submitBtnEventListener)