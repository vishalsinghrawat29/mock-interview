var inputTxt = document.querySelector(".input-txt");
var submitBtn = document.querySelector(".submit-btn")
var outputBox =  document.querySelector(".output-box")

submitBtn.disabled= true;

function submitBtnEventListner(){
    if(inputTxt.value.length < 10){
        outputBox.innerText = "error";
    }else{
        outputBox.innerText = "success";
    }
}
function inputTxtEventListner(){
    if(inputTxt.value.length < 10){
        submitBtn.disabled= true;
    }else{
        submitBtn.disabled= false;
    }
}
submitBtn.addEventListener("click", submitBtnEventListner);
inputTxt.addEventListener("input" , inputTxtEventListner);