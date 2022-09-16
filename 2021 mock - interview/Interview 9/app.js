var inputTxt = document.querySelector(".input-txt");
var showBtn = document.querySelector(".show-btn");
var outputBox = document.querySelector(".output-box");

function showBtnEventListner(){
    var inputValue = inputTxt.value;
    if(inputValue === "tanvi"){
        outputBox.innerText = "She is the best CEO ever!";
    }else if(inputValue === "tanay"){
        outputBox.innerText = "He is our FUNNY mentor!";
    }else if(inputValue === "swapnil"){
        outputBox.innerText = "He helps us CONQUER jobs!";
    }else if(inputValue === "akanksha"){
        outputBox.innerText = "She is our CHEERFUL Interviewer!";
    }else{
        outputBox.innerText = "enter valid input"
    }
}
showBtn.addEventListener("click" , showBtnEventListner)