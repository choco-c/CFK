const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

//defines the scroll to top button
const goup = document.getElementById("goup")

//defines the songs and makes em loop
const kittensong = new Audio("stuf/kitten beat.wav")
kittensong.loop = true;
const sillysong = new Audio("stuf/Fried Kitten Ballad.mp3")
sillysong.loop = true;

//defines the music popup menu buttons
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const mute = document.getElementById("mute")

//defines the music menu button and music popup div and creates a variable for if the popup is visible
const musicbtn = document.getElementById("music")
const popup = document.getElementById("msc-popup")
var vis = false

//plays/resets kittensong and pauses sillysong if it was playing
option1.addEventListener('click', () => {
    kittensong.currentTime = 0;
    sillysong.pause();
    sillysong.currentTime = 0;
    kittensong.play();
});

//plays/resets sillysong and pauses kittensong if it was playing
option2.addEventListener('click', () => {
    sillysong.currentTime = 0;
    kittensong.pause();
    kittensong.currentTime = 0;
    sillysong.play();
});

//mutes any playing song
mute.addEventListener('click', () => {
    kittensong.pause();
    sillysong.pause();
});

//toggles between if the popup is visible or not
musicbtn.addEventListener('click', () => {
    if (vis == false) {
        popup.style.display = "flex"
        setTimeout(() => {
            popup.classList.add("active");
        }, 10);
        vis = true;
    } else {
        popup.classList.remove("active");
        vis = false;
        setTimeout(() => {
            popup.style.display = "none"
        }, 300);
    }
});

//shows the scroll to top button if you are more than 700px away from the top or hides it if not
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 700) {
        goup.style.visibility = "visible"
    } else {
        goup.style.visibility = "hidden"
    }
})

//makes you go to the top of the page when clicking the scroll to top button
goup.addEventListener('click', () =>  {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

//window.addEventListener('load', () => {
//    kittensong.play();
//}); 

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
    interval: 120
});

ScrollReveal().reveal()("event-container", {
    duration: 670
});