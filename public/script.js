let menuOpenElement = document.querySelector(".menu_burger");
let menuNavElement = document.querySelector(".menu_nav");

menuOpenElement.addEventListener('click', function(){
    menuNavElement.classList.toggle("active");
    });

let catalogueBtnElement = document.querySelector(".catalogue_button");
let newsCardsElement = document.querySelectorAll(".news_card");

for (let i = 3; i < newsCardsElement.length; i++) {
    newsCardsElement[i].classList.add("hidden");
  }

catalogueBtnElement.addEventListener('click', function(){
    for (let i = 3; i < newsCardsElement.length; i++) {
        newsCardsElement[i].classList.remove("hidden");
      }
    });

// ALTERNATIVE BOUTON "FILTRER" > pas de retour possible à "Tous les produits" 

// let selectElement = document.querySelector(".catalogue_content_form_select");
// let formElement = document.querySelector(".catalogue_content_form");
// selectElement.addEventListener('change', function(){
//     formElement.submit();
//     });

