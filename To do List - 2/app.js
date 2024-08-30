const inputBox = document.getElementById("input-box");
const btn = document.getElementById("input-button");
const listContainer = document.getElementById("list-container");


btn.addEventListener("click",()=>{
    if(inputBox.value === ''){
        alert("You Must Write Something..");
    }
    else{
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();

})

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();