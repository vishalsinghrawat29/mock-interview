var currentPriceTxt  = document.querySelector(".current-price");
var costPriceTxt  = document.querySelector(".cost-price");
var submitBtn  = document.querySelector(".submit-btn");
var outputBox  = document.querySelector(".output-box");

function submitBtnEventListener(){
    var currentPrice = Number(currentPriceTxt.value);
    var costPrice = Number(costPriceTxt.value);
    var message = "";
    if(currentPrice > costPrice){
        var profit = currentPrice - costPrice;
        message = "profit is " + profit;
    }else if(currentPrice < costPrice){
        var loss = costPrice - currentPrice;
        message = "loss is " + loss;
    }else{
        message = "no profit, no loss";
    }
    outputBox.innerText = message;
}

submitBtn.addEventListener("click" , submitBtnEventListener)