let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("originalImg")
let line = document.getElementById("line")
let leftSpace = imgBox.offsetLeft;

originalImg.style.width = imgBox.offsetWidth + "px"

imgBox.onmousemove = function (e) {
    var BoxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = BoxWidth;
    line.style.left = BoxWidth
}