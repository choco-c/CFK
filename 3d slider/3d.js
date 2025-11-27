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