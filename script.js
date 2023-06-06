//A program that accepts an input, returns rock p s randomly and compares both to display if win or loose



/*
Get user input, store in var userChoice
Create func that generates random number if possibe betw 1-3and returns r p s depending
Create funct that compares userChoice and computerChoice and outputs wether user won or loose
*/


let computerChoice;

function getComputerChoice() {
    let random = Math.floor((Math.random() * 3) +1);
    if (random == 1) {
        computerChoice = "rock";
        return computerChoice;
    } else if (random == 2) {
        computerChoice = "paper";
        return computerChoice;
    } else if (random == 3) {
        computerChoice = "scissors";
        return computerChoice;
    }
}

let userChoice;

function getUserChoice() {
    userChoice = prompt(`Type your choice, "rock", "paper" or "scissors": `);
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
        return userChoice;
    } else {
        alert("Incorrect choice, please type again.")
        return getUserChoice();
    }
}

/* Switch statements use an expression and checks cases against it for a match,
 you can use a condition in the cases if the switch expression used is "true", 
 because conditions return booleans, true or false */

function getResult() {
    switch (userChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    return "Tie";            
                case "paper":
                    computerScore++;
                    return "You loose!";
                case "scissors":
                    userScore++;
                    return "You win!";
            }   

        case "paper":
            switch (computerChoice) {
                case "rock":
                    userScore++;
                    return "You win!";
                case "paper":
                    return "Tie";
                case "scissors":
                    computerScore++;
                    return "You loose!";        
            }

        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    return "You loose!";
                case "paper":
                    userScore++;
                    return "You win";
                case "scissors":
                    return "Tie!";        
            }    
    }
}

let userScore;
let computerScore;

function game() {
    userScore = 0;
    computerScore = 0;

    for (i = 0; i < 5; i++) {
        console.log(getUserChoice());
        console.log(getComputerChoice());
        console.log(getResult());
    }
    if (userScore > computerScore) {
        console.log("You are the Winner!");
    } else if (userScore < computerScore) {
        console.log("You are the Looser!");
    } else {
        console.log("Impossible, there is a tie?");
    }
}

game();





/*

{
    console.log(getUserChoice());
    console.log(getComputerChoice());
    console.log(getResult());
}
*/