let userScore = 0;
let CompScore = 0;
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const CompScorepara = document.querySelector("#bot-score");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const rankIdx = Math.floor(Math.random() * 3);
    return option[rankIdx];
};

const drawGame = () => {
    msg.innerText = " The game was draw play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,CompChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = ` Congrats!! You Win. ${userChoice} beats ${CompChoice}`
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = `You Loss ${CompChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
        CompScore++;
        CompScorepara.innerText = CompScore;
    }
};

const playGame = (userChoice) => {
    const CompChoice = genCompChoice();
    if (userChoice === CompChoice) {
        drawGame();
    } else{
        let userWin = true;
        if ( userChoice === "rock"){
            userWin = CompChoice === "paper" ? false:true;
        }else if (userChoice === "paper"){
            userWin =  CompChoice === "scissors" ? false:true;
        }else {
            // rock , paper
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,CompChoice);
    };

   
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id")
        playGame(userChoice);
    })
});

