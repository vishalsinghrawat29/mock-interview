{/* <button class="get-btn">Get</button>
    <div class="output-box"></div> */}

var getBtn = document.querySelector(".get-btn");
var outputBox = document.querySelector(".output-box");

function getBtnEventListener(){
    var url = "https://stock-api.desaihetav.repl.co/list";

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(var i = 0; i < data.data.length ; i++){
            outputBox.innerHTML += `<p> id = ${data.data[i].id} </p> <p>pasword = ${data.data[i].name}</p> <br>`;
        }
    })
    .catch(() => {
        outputBox.innerText = "data not found";
    })
}

getBtn.addEventListener("click" , getBtnEventListener);