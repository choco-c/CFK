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
const meowzers1 = new Audio("stuf/meowzers1.mp3")

//defines the music popup menu buttons
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const mute = document.getElementById("mute")

//defines the music menu button and music popup div and creates a variable for if the popup is visible
const musicbtn = document.getElementById("music")
const popup = document.getElementById("msc-popup")
var vis = false

//plays/resets kittensong and pauses the other songs
option1.addEventListener('click', () => {
    kittensong.currentTime = 0;
    sillysong.pause();

    meowzers1.currentTime = 0;
    meowzers1.pause()

    sillysong.currentTime = 0;
    kittensong.play();
});

//plays/resets sillysong and pauses the other songs
option2.addEventListener('click', () => {
    sillysong.currentTime = 0;
    kittensong.pause();
    
    meowzers1.currentTime = 0;
    meowzers1.pause()

    kittensong.currentTime = 0;
    sillysong.play();
});

//plays/resets my song called meowzers and pauses the other songs
option3.addEventListener('click', () => {
    sillysong.currentTime = 0;
    kittensong.pause();

    kittensong.currentTime = 0;
    sillysong.pause();

    meowzers1.currentTime = 0;
    meowzers1.play()
});

//mutes any playing song
mute.addEventListener('click', () => {
    kittensong.pause();
    sillysong.pause();
    meowzers1.pause()
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
const gorgontext = document.getElementById("gorgontxt")

function gordon() {
    gorgon.style.display = "flex"
    gorgontext.style.display = "none"

    gorgonaudio.play()
    setTimeout(() => {  
        gorgon.style.display = "none"
        gorgontext.style.display = "flex"
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

// ScrollReveal().reveal(".order-card", {
//     ...scrollRevealOption,
//     interval: 120
// });

ScrollReveal().reveal("event-container", {
    duration: 670
});

// defining chatbox button, box, input and the part where the msgs are put in

const chatbtn = document.getElementById("chatbtn")
const chatbox = document.getElementById("chatbox")
const input = document.getElementById("chatinput")
const chatc = document.getElementById("chatchat")

//  defining audio files

const boomp3 = document.getElementById('boo p.mp3')
const ribombeemp3 = new Audio('stuf/ribombeePLEASEsurvive.mp3')

// opens chatbox when chat button is clicked

let nobodyheretohelpyou = false

chatbtn.addEventListener('click', () => {
    console.log(nobodyheretohelpyou)
    if (nobodyheretohelpyou == false) {
        chatbtn.style.display = "none",
        chatbox.style.display = "flex"
    } else {
        chatbtn.innerHTML = "nobody here to help you now."
        chatbtn.style.backgroundColor = "red",
        chatbtn.style.fontSize = "0.7rem"
        chatbtn.style.color = "black"
        chatbtn.style.borderColor = "rgb(200, 0, 0)"

        setTimeout(() => {
            chatbtn.display = "none"
        }, 2000);
    }
})

//  closes chatbox when x is clicked

function closechat() {
    chatbtn.style.display = "flex",
    chatbox.style.display = "none"
}

let msgexists = false

// when Enter is clicked in the input, a random message is picked out of 50+ messages,
// however for certain words and sentences there are dedicated responses

input.addEventListener('keydown', (event) => {


    if (event.key === 'Enter') {

    let yourmsg = input.value.toLowerCase()
    

        const oldsentmsg = chatbox.querySelector(".sentmsg")
        if (oldsentmsg) oldsentmsg.remove()

        const oldaimsg = chatbox.querySelector(".aimsg")
        if (oldaimsg) oldaimsg.remove()

        let sentmsg = document.createElement("p")
        sentmsg.classList.add("sentmsg")
        sentmsg.innerHTML = ""
        sentmsg.innerHTML = input.value
        chatbox.appendChild(sentmsg)

        var idk = Math.floor((Math.random()) * 50)
        console.log(idk)

        if (input.value == "hello") {
            msgai = "hello to you too"
        } else if (yourmsg == "what") {
            msgai = "wdym 'what'?"
        } else if (yourmsg == "ok") {
            msgai = "ok ok ok ok ok"
        } else if (yourmsg == "bye") {
            msgai = "NOOOO DONT LEAVE"
        } else if (yourmsg == "why") {
            msgai = "why? because"
        } else if (yourmsg == "fuck you") {
            msgai = "no fuck you"
        } else if (yourmsg == "yes") {
            msgai = "no."
        } else if (yourmsg == "no") {
            msgai = "yes."
        } else if (yourmsg == "hi") {
            msgai = "hi im going to "
        } else if (yourmsg == "wha") {
            msgai = "wha"
        } else if (yourmsg == "uwu") {
            msgai = "uwu~"
        } else if (yourmsg == "owo") {
            msgai = "meow! owo"
        } else if (yourmsg == "nya") {
            msgai = "nya :3"
        } else if (yourmsg.includes('ribombee')) {
            setTimeout(() => {  
                ribombeemp3.play()
            }, 2100);
            msgai = "ribombee PLEASEE survive PLEASEEE"
        } else if (yourmsg == "sex") {
            msgai = "no id rather not with you"
        } else if (yourmsg == "are you a furry" ||input.value == "are you a furry?") {
            msgai = "am I a fuwwy? mwaybe"
        } else if (yourmsg == "i hate you") {
            msgai = "i hate you too pookie"
        } else if (yourmsg == "idk") {
            msgai = "you're too stupid to know?"
        } else if (yourmsg == "fuck off") {
            msgai = "no you fuck off"
        } else if (yourmsg == "sorry" || input.value == "im sorry" || input.value == "i apologize" || input.value == "my apologies") {
            msgai = "apology not accepted"
        } else if (yourmsg.includes("vpx")) {
            msgai = "fuck vpx i hope he explodes"
        } else if (yourmsg.includes("mister rap is alive")) {
            msgai = "🤫"
        } else if (yourmsg == "") {
            msgai = ""
        } else if (yourmsg == "i love you") {
            msgai = "ew stop loving me"
        } else if (yourmsg == "die") {
            msgai = "but i cant die"
        } else if (yourmsg == "greg") {
            msgai = "greg is real greg is life"
        } else if (yourmsg.includes('cfk')) {
            msgai = "if youre asking where to order cfk, you cant, also cfk stands for Choco's Fried Kitten if ur asking"
        } else if (yourmsg == "i shit my pants") {
            msgai = "yo i also shit my pants no way lmao lol rofl"
        } else if (yourmsg.includes("mushypolter") || yourmsg.includes("mushy") || yourmsg.includes("polter")) {
            msgai = "subscribe to MushyPolter youtube.com/@MushyPolter"
        } else if (yourmsg.includes("silly red") && yourmsg.includes("album")){
            msgai = "fuck you, it's never coming out"
        } else if (yourmsg.includes("ebo")){
            msgai = "ebo"
        } else if (yourmsg.includes("robux")){
            msgai = "free robux??"
        } else if (yourmsg.includes("vbucks")){
            msgai = "free vbucks???"
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
            setTimeout(() => {  
                ribombeemp3.play()
            }, 2100);
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
            setTimeout(() => {
                msgai = "boo"
            }, 2100);
            boomp3.play()
        } else if (idk == 49) {
            msgai = "that made my cry"
        } else if (idk == 50) {
            msgai = "im deaduzz glorking it rn ong"
        } else if (idk == 51) {
            msgai = "oh"
        } else if (idk == 52) {
            msgai = "do you even bust?"
        } else if (idk == 53) {
            msgai = "sorry"
        } else if (idk == 54) {
            msgai = "https://www.youtube.com/@MushyPolter/videos"
        } else if (idk == 55) {
            msgai = "subscribe to MushyPolter"
        } else if (idk == 56) {
            msgai = "GET OUT OF MY HEAD MAN"
        } else if (idk == 57) {
            msgai = "stop"
        } else if (idk == 58) {
            msgai = "grr"
        } else {
            msgai = "no"
        }

        input.value = ""

        setTimeout(() => {
            reply()
        }, 2100);

        function reply() {
            let aimsg = document.createElement("p")
            aimsg.classList.add("aimsg")
            aimsg.innerHTML = ""
            aimsg.innerHTML = msgai
            chatc.appendChild(aimsg)
            msgexists = true
        }
    }
});

// 3d slider

const slider = document.querySelector(".slider")

let rotation = 0;
const step = 360 / 10;

function right() {
    rotation += step;
    slider.style.transform = `perspective(1000px) rotateY(${rotation}deg)`
}

function left() {
    rotation -= step;
    slider.style.transform = `perspective(1000px) rotateY(${rotation}deg)`
}

function spinnywee() {
    let spinamount = 36 * (Math.floor(Math.random() * 10)) + 36 
    rotation += spinamount
    slider.style.transform = `perspective(1000px) rotateY(${rotation}deg)`
}

const moreinfodiv = document.querySelector(".moreinfo")

function moreinfo(element) {
    element.parentNode.querySelector(".moreinfo").style.display = "block"
}

function infox(elem) {
    elem.parentNode.style.display = "none"
}

const schrodinger1 = document.getElementById("schrodinger1")
const schrodinger2 = document.getElementById("schrodinger2")
let schrodingcounter = 0

function schrodinger() {
    setInterval(() => {
        schrodingcounter++
        if (schrodingcounter % 2 == 0) {
            schrodinger1.classList.add("hide2")
            schrodinger2.classList.remove("hide2")
        } else {
            schrodinger1.classList.remove("hide2")
            schrodinger2.classList.add("hide2")
        }
    }, 250);
}

schrodinger()

// gets all mipi elements to show when show more is clicked
const mipis = document.getElementsByClassName("mipi")

// removes the .hide class from all mipi elements, showing them, and starts mipitosis
function mipi() {
    Array.from(mipis).forEach(div => {
        div.classList.toggle("hide")
    })
    mipitosis()
}

// defining stuff necesarry for the mipitosis function
const ordergrid = document.querySelector(".order-grid")
const mipicard = document.querySelector(".order-card.mipi")
const hidebtn = document.getElementById("hidebtn")
const twentyeightdayslatertheme = new Audio("stuf/28DaysTheme.mp3")
const bannercards = document.getElementsByClassName("banner-card")

// defines mipiTimeout and startTimeout so hide() can clear it outside the mipitosis function
let mipiTimeout
let startTimeout

// spreads the mipi virus..
function mipitosis() {
    
    // defines original interval
    let mipiinterval = 6000
    // this variable will increase by 1 each time and the code will check if it is disivible by 4, only running it once every 4 times
    let imgcounter = 0;
    // if youre reading this you should watch 28 Days Later its pretty good, and its 2 sequels
    twentyeightdayslatertheme.play()

    // does some stuff to improve the mipi infection experiecnce at the start
    startTimeout = setTimeout(() => {
        // when this is true, clicking the cfk-bot button will make it red and show scawy text
        nobodyheretohelpyou = true

        // this hides some buttons and replaces the banner-card images with mipi since those use background-image in css
        hidebtn.style.display = "none"
        goup.style.display = "none"
        musicbtn.style.display = "none"
        chatbox.style.display = "none"
        Array.from(bannercards).forEach(div => {
            div.classList.toggle("mipibg")
        })
    }, 6000);

    // this is where the magic happens, every 'mipiinterval' amount of time it adds a mipi to the mipi section, replaces a menu item with mipi, randomly inserts a mipi somewhere, and replaces a random non-menu img with mipi
    function clonemipi() {

        // defines all mipicards every time the function runs
        let mipicards = document.querySelectorAll(".order-card.mipi")
        let nonmipiimgs

        // creates clone out of the original mipicard
        const clone = mipicard.cloneNode(true);
        ordergrid.appendChild(clone);

        // defines non-mipi menu items, and filters any potential menu items who's parent div is not the ordergrid so the ordergrid.insertBefore doesn't get an error
        let notmipicards = Array.from(document.querySelectorAll(".order-card:not(.mipi)"))
        .filter(card => card.parentElement === ordergrid)

        // replaces random menu item with mipi every 2 times
        if (notmipicards.length > 0 && imgcounter % 2 == 0) {
            console.log(`%cThere are ${notmipicards.length} menu item survivors left`, "color: limegreen")
            const randomreplacenum = Math.floor(Math.random() * notmipicards.length)
            const randomreplacecard = notmipicards[randomreplacenum]
            const clone2 = mipicard.cloneNode(true)
            randomreplacecard.replaceWith(clone2)
        }

        // gets all menu items
        allcards = Array.from(document.querySelectorAll(".order-card"))
        .filter(card => card.parentElement === ordergrid)

        // takes a random menu item including mipi and adds another mipi
        const randominsertnum = Math.floor(Math.random() * allcards.length)
        const randominsertcard = allcards[randominsertnum]
        const clone3 = mipicard.cloneNode(true)
        ordergrid.insertBefore(clone3, randominsertcard)
        
        // adds 1 to the imgcounter
        imgcounter++

        // creates an array from all images, excluding things using css for a background-image
        nonmipiimgs = Array.from(document.querySelectorAll("img"))
        .filter(img => img.getAttribute("src") !== "stuf/mipi.png" && !img.closest(".order-card"))

        // every 4 times and if there are any non-mipi images left, this takes a random img and replaces the source with mipi.png and shows in the console the amount of images left
        if (nonmipiimgs.length > 0 && imgcounter % 4 == 0) {
            console.log(`%c${nonmipiimgs.length} image survivors left`, "color: green")
            const randomimgnum = Math.floor(Math.random() * nonmipiimgs.length)
            const randomimg = nonmipiimgs[randomimgnum]
            randomimg.src = "stuf/mipi.png"
        }

        
        //shows mipi amount and cloning speed in the console
        console.log(`%cOne mipi is added every ${(mipiinterval) / 1000} seconds`, "color: orange")
        console.log(`%cThere are ${mipicards.length} mipis`, "color: red")

        // restarts the function and reduces the interval by .2s until reaching .4s
        if (mipiinterval > 400) {
            mipiinterval -= 200
            mipiTimeout = setTimeout(clonemipi, mipiinterval)
        } else {
            mipiTimeout = setTimeout(clonemipi, 400)
        }
    }

    // starts the function after mipiinterval amount of time, after this it repeats
    mipiTimeout = setTimeout(clonemipi, mipiinterval)
}

// this clears the start- and mipiTimeout to prevent mipitosis, and ends and resets the music, when mipitosis starts the hide button is removed and it cannot be undone.
function hide() {
    clearTimeout(startTimeout)
    clearTimeout(mipiTimeout)
    twentyeightdayslatertheme.pause()
    twentyeightdayslatertheme.currentTime = 0

    // this actually hides the mipi stuff
    Array.from(mipis).forEach(div => {
        div.classList.toggle("hide")
    })
}