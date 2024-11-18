let menuOpenElement = document.querySelector(".menu_open");
let headerElement = document.querySelector("header");

menuOpenElement.onclick = function(){
    let divElement = document.createElement("div");
    headerElement.append(divElement);
    divElement.classList.add("menu_div-mobile");
    }