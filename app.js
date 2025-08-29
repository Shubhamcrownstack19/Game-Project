let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");  // Get all choice elements
const msg = document.querySelector(".msg");

// Generate Computer choice
const generateComputerChoice= ()=>{
    const options = ["rock","paper","scissors"];
    const randomNumber= Math.floor(Math.random()*3);
    return options[randomNumber];

};

const showWinner = (userWin) => {
    if(userWin){
        console.log("User wins!");
        msg.innerText = `You win! ${userScore} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("Computer wins!");
        msg.innerText = `You Lose! ${computerScore} beats ${userScore}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
console.log("It's a tie!");
};

const playGame = (userChoice) =>{
    console.log("User choice is ",userChoice);
    //Generate Computer choice
    const computerChoice= generateComputerChoice();
    console.log("Computer choice is ",computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
        console.log("It's a tie!");
    } else {
        let userWin =true;

        if (userChoice === "rock") {
            // computer choice Paper or Scissors
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // computer choice Rock or Scissors
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            // rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }     
        showWinner(userWin);   
}    
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked ",userChoice);
        playGame(userChoice);
    });
});