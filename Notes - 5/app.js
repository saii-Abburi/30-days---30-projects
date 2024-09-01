const notesContainer = document.querySelector(".notes");
const createBtn = document.getElementById("createbtn");
let notes = document.querySelectorAll(".inputbox");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}


createBtn.addEventListener("click",createNotes);


function createNotes(){
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "inputbox";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "./assets/delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
    saveNotes();
}


function saveNotes(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}


notesContainer.addEventListener("click" ,function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveNotes();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputbox");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                saveNotes();
            }
        })
    }
})
document.addEventListener("keydown",(e)=>{
    if(e.key ==="Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})
showNotes();