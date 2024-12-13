document.addEventListener("DOMContentLoaded", () => { // Correction ici
    // Gestion du menu burger
    const toggle = document.querySelector(".menu-btn"); // Bouton burger
    const nav = document.querySelector(".menu"); // Menu

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = toggle.getAttribute("aria-expanded") === "true"; // Vérifier si le menu est ouvert
            const isClosed = !isOpen; // Inverser l'état du menu

            // Modifier l'état du menu et du bouton
            nav.setAttribute("aria-hidden", isOpen ? "true" : "false"); // Afficher/masquer le menu
            toggle.setAttribute("aria-expanded", isClosed.toString()); // Modifier l'état du bouton
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel__container");
    const items = document.querySelectorAll(".carousel__item");
    const prevButton = document.querySelector(".carousel__button--prev");
    const nextButton = document.querySelector(".carousel__button--next");
  
    let currentIndex = 0;
  
    if (carouselContainer && items.length > 0 && prevButton && nextButton) {
      const itemWidth = items[0].offsetWidth;
  
      // Fonction pour mettre à jour la position du carrousel
      const updateCarousel = () => {
        const newScrollLeft = currentIndex * itemWidth;
        carouselContainer.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  
        // Désactiver les boutons au début ou à la fin
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === items.length - 1;
      };
  
      // Gestion du clic sur le bouton précédent
      prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });
  
      // Gestion du clic sur le bouton suivant
      nextButton.addEventListener("click", () => {
        if (currentIndex < items.length - 1) {
          currentIndex++;
          updateCarousel();
        }
      });
  
      // Initialiser l'état des boutons
      updateCarousel();
    } else {
      console.error("Éléments du carrousel non trouvés ou incomplets.");
    }
  });
  
  
  
