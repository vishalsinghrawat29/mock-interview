var getBtn =  document.querySelector(".get-btn");
var outputBox = document.querySelector(".output-box");

function getBtnEventListner(){
    var url = "https://jsonplaceholder.typicode.com/todos";
    
    fetch(url)
    .then((res) => res.json())
    .then(data => {
        for(var i = 0; i < data.length; i++){
            if(!data[i].completed){
                outputBox.innerHTML  += '<p class ="not-completed">' + data[i].title + '<br>' + data[i].completed + '</p>';
            }else{
                outputBox.innerHTML  += '<p class ="completed">' + data[i].title + '<br>' + data[i].completed + '</p>';
            }
            
        }
    });
}

getBtn.addEventListener("click" , getBtnEventListner)
