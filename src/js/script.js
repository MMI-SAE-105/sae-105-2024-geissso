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
document.querySelector('.back-button').addEventListener('click', () => {
    window.history.back();
});