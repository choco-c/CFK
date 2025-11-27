const display = document.getElementById("display");
// creates const of all buttons except nuke 
const btns = Array.from(document.querySelectorAll("button")).filter(btn => btn.id !== "nuke");
const calculator = document.getElementById("calculator")

// adds value or pi to display

function appendToDisplay(input) {
    display.value += input;
}

function piToDisplay(){
    display.value += Math.PI;
}

// clears display

function clearDisplay(){
    display.value = "";
}

// displays the value of the calculation

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
        setTimeout(clearDisplay, 1100)
    }

    if (display.value == "undefined"){
        setTimeout(clearDisplay, 1600)
    }
}

// removes last part of string value

function backspace(){
    display.value = display.value.substring(0, display.value.length-1)
}

// plays honk

var audio = new Audio('Clown Horn Sound Effect 4.mp3');

function honk(){
    audio.play()
}

// nukes buttons, scattering them after playing an mp4 covering the calc


var nuked = false

const nukebtn = document.getElementById("nuke")
const container = document.getElementById("scatterarea")
const video = document.getElementById("nukevid");
video.load();

function nuke(){
    nukebtn.style.visibility = "hidden";
    video.style.visibility = "visible";
    video.play();

    var nuked = true

    const xn = Math.random() * 1000;
    const yn = Math.random() * 250;
    const rotn = Math.random() * 360 - 180;

    nutimg.style.visibility = "hidden"

    nukebtn.style.visibility = "hidden";
    nukebtn.style.position = "absolute";
    nukebtn.style.left = xn + "px";
    nukebtn.style.bottom = yn + "px";
    nukebtn.style.transform = `rotate(${rotn}deg)`;

    display.style.visibility = "hidden";
    display.style.transform = `rotate(${rotn}deg)`;
    display.style.marginTop = "500px"
    display.style.width = "500px"

    calculator.style.visibility = "hidden"
    calculator.style.height = "100vh"
    calculator.style.width = "100vh"
    calculator.style.borderRadius = "0"
    calculator.style.maxWidth = "99999px"

    btns.forEach(btn => {
      setTimeout(() => {
           const x = Math.random() * window.innerWidth
           const y = Math.random() * 250 + 15;
           const rot = Math.random() * 360 - 180;

            btn.style.visibility = "hidden";
            btn.style.position = "fixed";
            btn.style.left = x + "px";
            btn.style.bottom = y + "px";
            btn.style.transform = `rotate(${rot}deg)`;
        }, 0);
    });


    video.onended = function(){
        video.style.visibility = "hidden";
        nukebtn.style.visibility = "visible";
        display.style.visibility = "visible";
        btns.forEach(btn => {
            btn.style.visibility = "visible"
        });
    };
}

// creates element of nut gif then shows still image of the end, then clicking the broom removes it

const nutvid = document.getElementById("nutvid")
const nutimg = document.getElementById("nutimg")


function nut() {
    const oldGif = document.querySelector("#nutvid");
    if (oldGif) oldGif.remove();

    const gif = document.createElement("img");
    gif.id = "nutvid";
    gif.src = "nutvideo.gif?" + Math.random();
    gif.style.visibility = "visible";

    document.body.appendChild(gif);

    setTimeout(() => {
        gif.remove();
        nutimg.style.visibility = "visible";
    }, 500);
}

function broom() {
    nutimg.style.visibility = "hidden";
    const gif = document.querySelector("#nutvid");
    if (gif) gif.remove();
}

// changes opacity to 0, and disables half the buttons in a 1.5s transition, excluding the already vanished ones


function thanos() {
    const allbtns = Array.from(document.querySelectorAll("button"))
        .filter(btn => btn.id !== "thanos" && btn.style.opacity !== "0");

    const half = Math.floor(allbtns.length / 2);

    const thanosed = allbtns
        .sort(() => Math.random() - 0.5)
        .slice(0, half);

    thanosed.forEach(btn => {
        btn.style.transition = "opacity 1.5s ease";
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none"
        btn.disabled = true
    });
}

// summons bread stream

const breadimg = document.getElementById("breadstreamimage")
const breadmp3 = new Audio('breadstream.mp3')

function breadstream() {
    calculator.style.display = "none"
    breadimg.style.display = "flex"
    breadmp3.play();

}

// ends bread stream :sad:
breadmp3.addEventListener('ended', () => {calculator.style.display = "grid",
breadimg.style.display = "none"})

// beeps
const beep = new Audio('Microwave End Beep - Sound Effect for editing 4.mp3')
const yell = new Audio('Boobsyell.mp3')
const booba = new Audio('How to pronounce Boobs.mp3')

function beeps() {
    hm = Math.floor(Math.random() * 3)
console.log(hm)
    if (hm == 1) {
        beep.play()
    } else if (hm == 2) { 
        yell.play()
    } else {
        booba.play()
    }
}

// 90% chance of showing img of boo and playing boo audio, 
// 10% image of showing blue footed boobies, 
// hides button cuz boo is a ghost

const boobut = document.getElementById("boo")
const booo = document.getElementById("booo")
const boob = document.getElementById("boob")
const booaudio = new Audio('boo_YuFRj1C.mp3')
const boobaudio = new Audio('boo p.mp3')

function boo() {
    clearTimeout()
    boobut.style.visibility = "hidden"
    uh = Math.floor(Math.random() * 10)

    if (uh == 1) {
        boob.style.display = "flex"   
        boobaudio.play();

        setTimeout(() => {
            boob.style.display = "none"
            boobut.style.visibility = "visible"
        }, 100);
    } else {
        booo.style.display = "flex"
        booaudio.play();  

        setTimeout(() => {
            booo.style.display = "none"
        }, 1000);
    }
}

// plays sound of a squid going in a sand hole in the beach which makes a fart-like sound (dont ask questions i just randomly found it on yt while looking for fart sounds)

const fartmp3 = new Audio('Asmr Fart.mp3')

function fart() {
    fartmp3.play()
}

// 


function stroop() {

}

const uhhmp3 = new Audio('caedncylands.mp3')
const uhhbutton = document.getElementById("uhh")
const uhhimg = document.getElementById("uhhimg")

function uhh() {
    uhhmp3.play()

    uhhbutton.style.disabled = "true"
    uhhimg.style.visibility = "visible"
    uhhimg.style.transition = "300s"
    uhhimg.style.width = "1250px"
    uhhimg.style.height = "1250px"
}