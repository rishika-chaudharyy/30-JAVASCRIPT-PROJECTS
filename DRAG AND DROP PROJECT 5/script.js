let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null; // declare selected variable here

for (listBox of lists) {
    listBox.addEventListener("dragstart", function (e) {
        selected = e.target; // set selected here
    })

    rightBox.addEventListener("dragover", function (e) {
        e.preventDefault();
    })

    rightBox.addEventListener('drop', function (e) {
        e.preventDefault(); // add this to prevent default behavior
        if (selected) { // check if selected is not null
            rightBox.appendChild(selected);
            selected = null;
        }
    })

    leftBox.addEventListener("dragover", function (e) {
        e.preventDefault();
    })

    leftBox.addEventListener('drop', function (e) {
        e.preventDefault(); // add this to prevent default behavior
        if (selected) { // check if selected is not null
            leftBox.appendChild(selected);
            selected = null;
        }
    })


}