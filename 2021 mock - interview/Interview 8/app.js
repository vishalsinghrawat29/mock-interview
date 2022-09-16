var nameInput = document.querySelector(".name-input");
var passwordInput = document.querySelector(".password-input");
var checkBtn = document.querySelector(".check-btn");
var outputBox = document.querySelector(".output-box");
function checkBtnEventListner(){
    var nameStr = nameInput.value;
    var passwordStr = passwordInput.value;
    if(passwordStr.includes(nameStr)){
        outputBox.innerText = "password can't have a name";
    }else{
        outputBox.innerText = "super";
    }
}

checkBtn.addEventListener("click" , checkBtnEventListner);
