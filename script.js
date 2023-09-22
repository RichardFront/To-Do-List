const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
       
        
    }
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");
        saveData();

       if (e.target.classList.contains("checked")){
        e.target.querySelector("span").style.display = "block";
       }
       else{
        e.target.querySelector("span").style.display = "none";
       }
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});
