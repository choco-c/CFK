let userScore = 0;
let pcScore = 0;
// defines the user and pc score spans in the scoreboard
const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
// defines the scoreboard div and result p
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
// defines the divs of the 3 options
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// "comp" picks a random option

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
};

//  converts r p and s to corresponding words

function conv2word(letter) {
    if(letter === "r") return "Piedra";
    if(letter === "p") return "Papel";
    return "Tijera";
}

// shows if you won lost or tied

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    const smalluserword = "usuario".fontsize(3).sub()
    const smallpcword = "computer".fontsize(3).sub()
    result_p.innerHTML = `${conv2word(userChoice)}${(smalluserword)}beats ${conv2word(computerChoice)}${(smallpcword)}, you win!!`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 600);
};

function lose(userChoice, computerChoice) {
    pcScore++;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    const smalluserword = "usuario".fontsize(3).sub()
    const smallpcword = "computer".fontsize(3).sub()
    result_p.innerHTML = `${conv2word(computerChoice)}${(smallpcword)}beats ${conv2word(userChoice)}${(smalluserword)}, you lose..`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 600);
};

function tie(userChoice, computerChoice) {
    const smalluserword = "usuario".fontsize(3).sub()
    const smallpcword = "computer".fontsize(3).sub()
    result_p.innerHTML = `${conv2word(userChoice)}${(smalluserword)}equals ${conv2word(computerChoice)}${(smallpcword)}, it's a tie`
    document.getElementById(userChoice).classList.add('ylw-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('ylw-glow'), 600);
};

// detects if you won, lost or tied and calls the appropiate function

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
    }
};

// detects what option you clicked

function main() {

    rock_div.addEventListener('click', () => game("r") );
    
    paper_div.addEventListener('click', function() {
        game("p");
    });
    
    scissors_div.addEventListener('click', function() {
        game("s");
    });

};


main();

// from tutorial https://www.youtube.com/watch?v=jaVNP3nIAv0