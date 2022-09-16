var fetchBtn = document.querySelector(".fetch-btn");
var outputBox = document.querySelector(".output-box");

function fetchBtnEventListener(){
    var url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then((res) => res.json())
    .then((data)=> {
        for(var i =0 ; i< data.length ; i++){
            outputBox.innerText += data[i].title + "\n";
        }
    })
    .catch(err);
}

fetchBtn.addEventListener("click", fetchBtnEventListener)
