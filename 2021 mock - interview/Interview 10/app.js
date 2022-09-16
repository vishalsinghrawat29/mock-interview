var yjhdBtn = document.querySelector(".yjhd-btn");
var znmdBtn = document.querySelector(".znmd-btn");
var outputBox = document.querySelector(".output-box");

var yjhdBtnValue = yjhdBtn.innerText;
var znmdBtnValue = znmdBtn.innerText;
var url = "https://mock-practice.prakhar10v.repl.co/bollywood?name=";



function apiBtnEventHandler(valueTxt){
    var urlTxt = url + valueTxt;
    fetch(urlTxt)
    .then((res) => res.json())
    .then((data) => {
        outputBox.innerText = data.message;
    });
}


yjhdBtn.addEventListener("click" , () => apiBtnEventHandler(yjhdBtnValue));
znmdBtn.addEventListener("click" , () => apiBtnEventHandler(znmdBtnValue));