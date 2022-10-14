let computerScore = 0;
let playerScore = 0;

// a computer play function to randomly return rock paper or scissors
function computerPlay() {
    let availableMoves = ['rock', 'paper', 'scissors']; 
// availableMoves.length will automatically count # of items in Array. 3 would've worked too but auto counting is better
// Math.random() times the array length will give you a random index from 0 to 2.99
// Math.floor() will round the index down to the previous whole number. here, we can only get 0 to 2
    let randomIndex = Math.floor(Math.random() * availableMoves.length);
// now that random index against the array name like this will give you a random item from the array
    let randomCompSelect = availableMoves[randomIndex];
// we need to return that random item and do something with it
    return randomCompSelect;
}


function playRound(playerSelection, computerSelection) {
    // let result;
    console.log('Player:', playerSelection, 'Computer:', computerSelection)
    switch(playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                resultDiv.textContent = 'Draw! You both picked Rock';
            } else if (computerSelection === 'paper') {
                computerScore++;
                compDiv.textContent = `Computer Score: ${computerScore}`;
                resultDiv.textContent = 'You lose! Rock gets covered by Paper';
                displayScore();
            } else if (computerSelection === 'scissors') {
                playerScore++;
                playerDiv.textContent = `Player Score: ${playerScore}`;
                resultDiv.textContent = 'You win! Rock crashes Scissors';
                displayScore();
            }
        break;
        case 'paper':
            if (computerSelection === 'rock') {
                playerScore++;
                playerDiv.textContent = `Player Score: ${playerScore}`;
                displayScore();
            } else if (computerSelection === 'paper') {
                resultDiv.textContent = 'Draw! You both picked Paper';
            } else if (computerSelection === 'scissors') {
                computerScore++;
                compDiv.textContent = `Computer Score: ${computerScore}`;
                resultDiv.textContent = 'You Lose! Paper gets cut by Scissors';
                displayScore();
            }
        break;
        case 'scissors':
            if (computerSelection === 'rock') {
                computerScore++;
                compDiv.textContent = `Computer Score: ${computerScore}`;
                resultDiv.textContent = 'You Lose! Scissors get crushed by Rock';
                displayScore();
            } else if (computerSelection === 'paper') {
                playerScore++;
                playerDiv.textContent = `Player Score: ${playerScore}`
                resultDiv.textContent = 'You Win! Scissors cuts Paper';
                displayScore();
            } else if (computerSelection === 'scissors') {
                resultDiv.textContent = 'Draw! You both picked Scissors';
            }
        break;
    }
}

function displayScore() {

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            winner.textContent = 'CONGRATULATIONS! YOU WON THE GAME BY '+ (playerScore - computerScore) +' POINT(S)';
        } else if (computerScore > playerScore) {
            winner.textContent = 'YOU LOST BY '+ (computerScore - playerScore) +' POINT(S). BETTER LUCK NEXT TIME';
        } else {
            winner.textContent = 'Draw! Try again';
        }

        playerScore = 0;
        computerScore = 0;

        playerDiv.textContent = `Player Score: ${playerScore}`;
        compDiv.textContent = `Computer Score: ${computerScore}`;
    }
}
const resultDiv = document.createElement('div');
const buttons = document.querySelector('div');
buttons.appendChild(resultDiv);


const playerDiv = document.createElement('div')
buttons.appendChild(playerDiv);

const compDiv = document.createElement('div')
buttons.appendChild(compDiv);

        const rockBtn = document.querySelector('#rock-btn');
        rockBtn.addEventListener('click', (e) => {
            playRound('rock', computerPlay());
        });

        const paperBtn = document.querySelector('#paper-btn');
        paperBtn.addEventListener('click', (e) => {
            playRound('paper', computerPlay());
        });

        const scissorsBtn = document.querySelector('#scissors-btn');
        scissorsBtn.addEventListener('click', (e) => {
            playRound('scissors', computerPlay());
        });


    const winner = document.createElement('h3');
    buttons.appendChild(winner);
 