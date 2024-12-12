document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-btn");
    const nav = document.querySelector("#mainNav");

   
    nav.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", (evt) => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        const isClosed = !isOpen;

        nav.setAttribute("aria-hidden", isOpen ? "true" : "false");
        toggle.setAttribute("aria-expanded", isClosed.toString());
    });
});
