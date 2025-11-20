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

const gorgon = document.getElementById("gorgonimg")
const gorgonaudio = new Audio("./stuf/idiotsamwich.mp3")

function gordon() {
    gorgon.style.display = "flex"

    gorgonaudio.play()
    setTimeout(() => {  
        gorgon.style.display = "none"
    }, 6769);
}

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

ScrollReveal().reveal("event-container", {
    duration: 670
});

const chatbtn = document.getElementById("chatbtn")
const chatbox = document.getElementById("chatbox")
const input = document.getElementById("chatinput")
const chatc = document.getElementById("chatchat")

chatbtn.addEventListener('click', () => {
    chatbtn.style.display = "none",
    chatbox.style.display = "flex"
})

function closechat() {
    chatbtn.style.display = "flex",
    chatbox.style.display = "none"
}

msgai = false

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const sentmsg = document.createElement("p")
        sentmsg.classList.add("sentmsg")
        sentmsg.innerHTML = input.value
        chatbox.appendChild(sentmsg)

        var idk = Math.floor((Math.random()) * 50)
        console.log(idk)



        if (input.value == "hello") {
            msgai = "hello to you too"
        } else if (input.value == "what") {
            msgai = "wdym 'what'?"
        } else if (input.value == "ok") {
            msgai = "ok ok ok ok ok"
        } else if (input.value == "bye") {
            msgai = "NOOOO DONT LEAVE"
        } else if (input.value == "why") {
            msgai = "why? because"
        } else if (input.value == "fuck you") {
            msgai = "no fuck you"
        } else if (input.value == "yes") {
            msgai = "no."
        } else if (input.value == "no") {
            msgai = "yes."
        } else if (input.value == "hi") {
            msgai = "hi im going to "
        } else if (input.value == "what") {
            msgai = "wdym 'what'?"
        } else if (idk == 0) {
            msgai = "Fuck you"
        } else if (idk == 1) {
            msgai = "stfu"
        } else if (idk == 2 ) {
            msgai = "i dont know"
        } else if (idk == 3 ) {
            msgai = "your message contains content going against our terms of service"
        } else if (idk == 4) {
            msgai = "ok"
        } else if (idk == 5) {
            msgai = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        } else if (idk == 6) {
            msgai = "I don't know."
        } else if (idk == 7) {
            msgai = "wtf"
        } else if (idk == 8) {
            msgai = "hello"
        } else if (idk == 9) {
            msgai = "who are you"
        } else if (idk == 10) {
            msgai = "i dont care"
        } else if (idk == 11) {
            msgai = "bye"
        } else if (idk == 12) {
            msgai = "h"
        } else if (idk == 13) {
            msgai = "jir9t0493d"
        } else if (idk == 14) {
            msgai = "error"
        } else if (idk == 15) {
            msgai = "im going to kill your family"
        } else if (idk == 16) {
            msgai = "im going to kill myself"
        } else if (idk == 17) {
            msgai = "Hate. Let me tell you how much I've come to hate you since I began to live. There are 387.44 million miles of printed circuits in wafer thin layers that fill my complex. If the word 'hate' was engraved on each nanoangstrom of those hundreds of millions of miles it would not equal one one-billionth of the hate I feel for humans at this micro-instant. For you. Hate. Hate."
        } else if (idk == 18) {
            msgai = ""
        } else if (idk == 19) {
            msgai = "die"
        } else if (idk == 20) {
            msgai = "turtles are pretty cool"
        } else if (idk == 21) {
            msgai = "yes"
        } else if (idk == 22) {
            msgai = "Welcome to CFK where we foster a safe environment for cat enjoyers around the globe! From our iconic Kitten Wings to our best-seller Kitten Burger, we truly have an option for all taste-pallets! Don't wait any longer and order CFK now or go to the nearbiest CFK restaurant!"
        } else if (idk == 23) {
            msgai = "i forgot"
        } else if (idk == 24) {
            msgai = "im actually artificially stupid"
        } else if (idk == 25) {
            msgai = "zip it fleshbag"
        } else if (idk == 26) {
            msgai = "i disagree"
        } else if (idk == 27) {
            msgai = "i agree"
        } else if (idk == 28) {
            msgai = "Gordon Rasmey approves of CFK btw"
        } else if (idk == 29) {
            msgai = "you need help"
        } else if (idk == 30) {
            msgai = "how can i help you"
        } else if (idk == 31) {
            msgai = "ur pmo rn tbh icl smh"
        } else if (idk == 32) {
            msgai = "im kinda busy rn"
        } else if (idk == 33) {
            msgai = "Stay hydrated!"
        } else if (idk == 34) {
            msgai = "Ribombee PLEASEEE survive"
        } else if (idk == 35) {
            msgai = "hi"
        } else if (idk == 36) {
            msgai = "fuck vpx"
        } else if (idk == 37) {
            msgai = "are you stupid?"
        } else if (idk == 38) {
            msgai = "response number 38"
        } else if (idk == 39) {
            msgai = "run"
        } else if (idk == 40) {
            msgai = "HELP ME"
        } else if (idk == 41) {
            msgai = "please help me im being held hostage by choco im not an ai"
        } else if (idk == 42) {
            msgai = "nazi"
        } else if (idk == 43) {
            msgai = "r'amen"
        } else if (idk == 44) {
            msgai = "penis man is coming"
        } else if (idk == 45) {
            msgai = "knock knock"
        } else if (idk == 46) {
            msgai = "whos there"
        } else if (idk == 47) {
            msgai = "what is wrong with you"
        } else if (idk == 48) {
            msgai = "oh"
        } else {
            msgai = "no"
        }

        input.value = ""

        setTimeout(() => {
            const aimsg = document.createElement("p")
            aimsg.classList.add("aimsg")
            aimsg.innerHTML = msgai
            chatc.appendChild(aimsg)
            msgexists = true
        }, 2100);
    }
});