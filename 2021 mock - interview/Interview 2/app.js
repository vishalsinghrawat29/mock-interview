var inputTxt = document.querySelector(".input-txt");
var submitBtn = document.querySelector(".submit-btn");

submitBtn.disabled = true;

function inputTxtEventListner(){
    var inputTxtLength = inputTxt.value.length;
    if(inputTxtLength === 0){
        submitBtn.disabled = true;
    }
    submitBtn.disabled = false;
}



inputTxt.addEventListener("change", inputTxtEventListner);