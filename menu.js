const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const kittensong = new Audio("stuf/kitten beat.wav")
kittensong.loop = true;

window.addEventListener('load', () => {
    kittensong.play();
});

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin:"right",
})
ScrollReveal().reveal(".header-content h2", {
    ...scrollRevealOption,
    delay: 440,
});
ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 780,
});

ScrollReveal().reveal(".order-card", {
    ...scrollRevealOption,
    interval: 320
});

ScrollReveal().reveal()("event-container", {
    duration: 670
});