const notesContainer = document.querySelector(".notes-container")

const createBtn = document.querySelector(".btn")

let notes = document.querySelectorAll(".input-box")

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img")
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    inputBox.onkeyup = function () {
        updateStorage();
    }
})

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
})

// attach event listener to existing notes
notes.forEach(nt => {
    nt.onkeyup = function () {
        updateStorage();
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})