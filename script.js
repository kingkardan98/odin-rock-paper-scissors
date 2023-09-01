document.addEventListener('DOMContentLoaded', () => {
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        let random = Math.floor(Math.random() * 3); // This will generate a value between 0 and 2.
    
        return choices[random];
    }
    
    function playRound(playerSelection, computerSelection) {
        let desc = document.querySelector('#desc');
        let playerPara = document.querySelector('#player');
        let computerPara = document.querySelector('#computer');

        switch(playerSelection) {
            // We first analyze what happens when the player chooses rock.
            case 'rock':
                switch(computerSelection) {
                    case 'rock':
                        desc.textContent = "It's a tie!";
                        break;
                    case 'paper':
                        desc.textContent = "You lose! Paper beats Rock";
                        computerScore++;
                        break;
                    case 'scissors':
                        desc.textContent = "You win! Rock beats Scissors";
                        playerScore++;
                        break;
                }
                break;
            
                // Then if he chooses paper.
                case 'paper':
                    switch(computerSelection) {
                        case 'rock':
                            desc.textContent = "You win! Paper beats Rock";
                            playerScore++;
                            break;
                        case 'paper':
                            desc.textContent = "It's a tie!";
                            break;
                        case 'scissors':
                            desc.textContent = "You lose! Scissors beats Paper";
                            computerScore++;
                            break;
                    }
                    break;
    
                // Lastly, if he chooses scissors.
                case 'scissors':
                    switch(computerSelection) {
                        case 'rock':
                            desc.textContent = "You lose! Rock beats Scissors";
                            computerScore++;
                            break;
                        case 'paper':
                            desc.textContent = "You win! Scissors beats Paper";
                            playerScore++;
                            break;
                        case 'scissors':
                            desc.textContent = "It's a tie!";
                            break;
                    }
                    break;
        }
        
        playerPara.textContent = 'Player score: ' + playerScore;
        computerPara.textContent = 'Computer score: ' + computerScore;
    
        let winnerPara = document.querySelector('#winner');
        winnerPara.style.color = 'green';
        winnerPara.style.fontWeight = 'bold';
    
        if (playerScore == 5) {
            desc.textContent = '';
            winnerPara.textContent = 'Player wins!';
            playerScore = computerScore = 0;
        } else if (computerScore == 5) {
            desc.textContent = '';
            winnerPara.textContent = 'Computer wins!';
            playerScore = computerScore = 0;
        } else if (playerScore == 0 && computerScore == 0) {
            winnerPara.textContent = '';
        }
    }
    
    let playerScore = 0;
    let computerScore = 0;

    let rockButton = document.querySelector('#rock');
    let paperButton = document.querySelector('#paper');
    let scissorsButton = document.querySelector('#scissors');
    
    rockButton.addEventListener('click', () => {playRound('rock', getComputerChoice())});
    paperButton.addEventListener('click', () => {playRound('paper', getComputerChoice())});
    scissorsButton.addEventListener('click', () => {playRound('scissors', getComputerChoice())});
})
