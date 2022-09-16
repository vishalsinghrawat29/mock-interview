var fetchBtn = document.querySelector(".fetch-btn");
var outputBox = document.querySelector(".output-box");

function fetchBtnEventListner(){
    var url = "https://mystery-api.kushanksriraj.repl.co/get";
    fetch(url)
    .then((res) => {
        if(res.status === 404){
            outputBox.innerText = "page not found";
        }else if(res.status === 401){
            outputBox.innerText = "you are not logged in";
        }else if(res.status === 200){
            outputBox.innerText = "API is working";
        }
    })
}

fetchBtn.addEventListener("click", fetchBtnEventListner)