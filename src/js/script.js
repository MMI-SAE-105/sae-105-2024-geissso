
const toggle = document.querySelector(".Menu");
const nav = document.querySelector(".Menu"); 

const page = document.body;if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.ariaExpanded === "true";
      const isClosed = !isOpen;
     
      toggle.ariaExpanded = isClosed;
      nav.ariaHidden = isOpen;
      page.classList.toggle("noscroll", isClosed);
    });
  }