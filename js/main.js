const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav-menu");
navTriggerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("nav-is-open");
});

// Swiper
const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20, // فضای بین اسلایدها
    breakpoints: {
        320: {
            slidesPerView: 1, //  نام و نمایش یک اسلاید در عرض 320px
        },
        960: {
            slidesPerView: 2, //  نام و نمایش سه اسلاید در عرض 960px
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

//scroll reveal animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
});

sr.reveal('.hero__text', { origin: 'top' });