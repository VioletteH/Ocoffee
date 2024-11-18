let menuOpenElement = document.querySelector(".menu_burger");
let menuUlElement = document.querySelector(".menu_ul");

menuOpenElement.onclick = function(){
    menuUlElement.classList.toggle("active");
    }