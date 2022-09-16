var checkBtn = document.querySelector(".check-btn");
var outputBox = document.querySelector(".output-box");

var inputArray = [
    {
        task: "excercise",
        completed: true
    },
    {
        task: "study",
        completed: false
    },
    {
        task: "assignemnt",
        completed: true
    }
]

function checkBtnEventListener(){
    for(var i = 0; i< inputArray.length; i++){
        if(inputArray[i].completed){
            outputBox.innerHTML += "<p>" + inputArray[i].task + "</p>"; 
        }
    }
    console.log();
}

checkBtn.addEventListener("click", checkBtnEventListener);