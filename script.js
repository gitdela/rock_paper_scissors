

// a computer play function to randomly return rock paper or scissors
function computerPlay() {
// define an array of possible moves which are 3
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


function singleRound(playerSelection, computerSelection) {
    console.log('1 ', playerSelection, '2 ', computerSelection)
    switch(playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                return 'Draw';
            } else if (computerSelection === 'paper') {
                return 'You lose! Rock gets covered by Paper';
            } else if (computerSelection === 'scissors') {
                return 'You win! Rock crashes Scissors';
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                return 'You win! Paper covers Rock';
            } else if (computerSelection === 'paper') {
                return 'Draw';
            } else if (computerSelection === 'scissors') {
                return 'You lose! Paper gets cut by Scissors';
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                return 'You lose! Scissors gets crashed by Rock';
            } else if (computerSelection === 'paper') {
                return 'You win! Scissors cuts Paper';
            } else if (computerSelection === 'scissors') {
                return 'Draw! You both picked Scissors';
            }
            break;
    }
}


let playerSelectionGs = prompt('Select one of rock, paper, scissors: ', 'Case insensitive but check the spelling').toLowerCase();
let computerSelectionGs = computerPlay();

console.log(singleRound(playerSelectionGs, computerSelectionGs));