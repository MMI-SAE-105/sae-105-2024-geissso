document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-btn"); // Bouton burger
    const nav = document.querySelector(".menu"); // Menu
    
    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true"; // Vérifier si le menu est ouvert
        const isClosed = !isOpen; // Inverser l'état du menu

        console.log("isOpen : ", isOpen, "isClosed :", isClosed); // Log pour vérifier

        // Modifiez l'état du menu et du bouton
        nav.setAttribute("aria-hidden", isOpen ? "true" : "false"); // Afficher/masquer le menu
        toggle.setAttribute("aria-expanded", isClosed.toString()); // Modifier l'état du bouton
    });
});
const carousel = document.querySelector(".carousel_ecran");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel && prevButton && nextButton) {
  const items = document.querySelectorAll(".items_carousel");
  const itemWidth = items[0].clientWidth;

  
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
  });
}