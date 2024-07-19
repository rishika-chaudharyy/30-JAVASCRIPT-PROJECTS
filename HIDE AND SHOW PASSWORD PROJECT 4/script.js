let eyeIcon = document.getElementById("eye-icon")
let password = document.getElementById("password")

eyeIcon.addEventListener("click", () => {
    if (password.type == "password") {//means if type is password always hidden by default
        password.type = "text";
        eyeIcon.src = "829117.png";
    } else {
        password.type = "password";
        eyeIcon.src = "eye-close-1.png";
    }
})