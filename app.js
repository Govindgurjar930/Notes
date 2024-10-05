const notescontainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function show() {
    notescontainer.innerHTML = localStorage.getItem("notes") || "";
}

function updated() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

// Show saved notes on page load
show();

// Add new note on button click
btn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputbox.appendChild(img);
    notescontainer.appendChild(inputbox);

    // Update notes variable and save changes
    notes = document.querySelectorAll(".input-box");
    updated();
});

// Handle clicks inside the notes container
notescontainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updated();
    } else if (e.target.tagName === "P") {
        // Refresh the notes list and add keyup event for updating
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updated();
            }
        });
    }
});
