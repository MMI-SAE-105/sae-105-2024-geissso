
const carousel = document.querySelector('.old-edition__carousel');
carousel.addEventListener('wheel', (e) => {
    e.preventDefault();
    carousel.scrollBy({
        left: e.deltaY < 0 ? -100 : 100,
        behavior: 'smooth',
    });
});