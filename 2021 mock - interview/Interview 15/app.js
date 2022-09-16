// // <input type="text" class="password">
// <input type="text" class="password-check">
// <button class="check-btn">Check</button>
// <div class="output-box"></div>

var passwordTxt = document.querySelector(".password-txt");
var passwordCheck = document.querySelector(".password-check");
var checkBtn = document.querySelector(".check-btn");
var outputBox = document.querySelector(".output-box");

function checkBtnEventListener(){
    if(passwordTxt.value === passwordCheck.value){
        outputBox.innerText = "success";
    }else{
        outputBox.innerText = "Passwords Mismatched";
    }
}

checkBtn.addEventListener("click" , checkBtnEventListener);