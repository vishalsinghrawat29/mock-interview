var checktBtn = document.querySelector(".check-btn");

function getData(data){
    for(var i =0; i<data.length; i++){
        console.log(data[i].name )
    }
}

function errorHandler(error){
    console.log(error)
}

function checktBtnEventHandler(){
    var url = "https://stock-api.desaihetav.repl.co/list";
    fetch(url)
    .then((res => res.json()))
    .then(json => getData(json.data))
    .catch(errorHandler);
}

checktBtn.addEventListener("click", checktBtnEventHandler);