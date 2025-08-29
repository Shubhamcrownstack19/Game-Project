let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");  // Get all choice elements

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked ",userChoice);
    });
});