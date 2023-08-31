function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3); // This will generate a value between 0 and 2.

    return choices[random];
}

function playerChoice () {
    let playerChoice = prompt('Input either rock, paper or scissors');
    playerChoice = playerChoice.toLowerCase(); // This gets the input from the player, and makes it lowercase.

    while (!(['rock', 'paper', 'scissors'].includes(playerChoice))) {
        playerChoice = prompt('Invalid choice. Input either rock, paper or scissors'); // Get playerChoice until user cooperates.
    }

    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    // We signal a tie with a 0, a computer win with 1 and a player win with -1.
    switch(playerSelection) {
        // We first analyze what happens when the player chooses rock.
        case 'rock':
            switch(computerSelection) {
                case 'rock':
                    console.log("It's a tie!");
                    return 0;
                case 'paper':
                    console.log("You lose! Paper beats Rock")
                    return 1;
                case 'scissors':
                    console.log("You win! Rock beats Scissors");
                    return -1;
            }
            break;
        
            // Then if he chooses paper.
            case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        console.log("You win! Paper beats Rock");
                        return -1;
                    case 'paper':
                        console.log("It's a tie!")
                        return 0;
                    case 'scissors':
                        console.log("You lose! Scissors beats Paper");
                        return 1;
                }
                break;

            // Lastly, if he chooses scissors.
            case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        console.log("You lose! Rock beats Scissors");
                        return 1;
                    case 'paper':
                        console.log("You win! Scissors beats Paper")
                        return -1;
                    case 'scissors':
                        console.log("It's a tie!");
                        return 0;
                }
                break;
    }
}

function game() {
    let computerWins = playerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerChoice();
        let computerSelection = getComputerChoice();

        let winner = playRound(playerSelection, computerSelection);
        switch(winner) {
            case 1:
                computerWins++;
                break;
            case -1:
                playerWins++;
                break;
            case 0:
                break;
            default:
                break;
        }
    }

    let winnerName = '';
    if (computerWins === playerWins) {
        console.log("It's a tie! Nobody wins!");
    } else {
        if (computerWins > playerWins) {
            winnerName = 'Computer';
        } else {
            winnerName = 'Player';
        }
        console.log("Player scored " + playerWins + ", Computer scored " + computerWins + ". \n" + winnerName + " wins!");
    }
}

console.log(game());