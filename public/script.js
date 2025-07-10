// MENU BURGER

let menuOpenElement = document.querySelector(".menu_burger");
let menuNavElement = document.querySelector(".menu_nav");

menuOpenElement.addEventListener('click', function(){
    menuNavElement.classList.toggle("active");
    });

// BOUTON VOIR LE CATALOGUE

// if (window.location.pathname.includes("/catalogue")) {

//   let catalogueBtnElement = document.querySelector(".catalogue_button");
//   let cardsElement = document.querySelectorAll(".card");

//   for (let i = 3; i < cardsElement.length; i++) {
//       cardsElement[i].classList.add("hidden");
//     }

//   catalogueBtnElement.addEventListener('click', function(){
//       for (let i = 3; i < cardsElement.length; i++) {
//         cardsElement[i].classList.remove("hidden");
//         }
//         catalogueBtnElement.classList.add("hidden");
//       });
// };

// MAP

if (window.location.pathname.includes("/a-propos")) {
  const mapElement = document.getElementById("map");

  if (mapElement) {
      var map = L.map('map').setView([32.138095, -95.486583], 13); // Paris (latitude, longitude, zoom)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([32.138095, -95.486583]).addTo(map)
          .bindPopup("<b>Bienvenue à Coffee City</b><br>C'est ici que se trouve notre boutique !")
          .openPopup();
  }
}

// FORMULAIRE DE CONTACT

if (window.location.pathname.includes("/contact")) {
  emailjs.init({
    publicKey: 'LVhHr8Q1LMXhY4XD0'
  });

  document.querySelector("#contact_form").addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_wa15238', 'contact_form', this)
        .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });
});
}