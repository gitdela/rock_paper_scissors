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


// remember the variables here are separate arguments that are defined as variables inside this function ()s 
// function singleRound(playerSelection, computerSelection) {
// // this console.log call is interesting. look at it carefully
//     // console.log('Player:', playerSelection, 'Computer:', computerSelection)
// // i could've easily used if else and logical operators easily but i decided to use switch case with if else embedded in it
// // since the computer selection was going to be generated auto, i decided to make the cases rep the player selection
// // not that it matters but just for my understanding
//     switch(playerSelection) {
//         case 'rock':
//             if (computerSelection === 'rock') {
//                 return 'Draw! You both picked Rock';
//             } else if (computerSelection === 'paper') {
//                 computerScore++;
//                 // console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)
//                 return 'You lose! Rock gets covered by Paper';
//             } else if (computerSelection === 'scissors') {
//                 playerScore++;
//                 // console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)
//                 return 'You win! Rock crashes Scissors';
//             }
//             break;
//         case 'paper':
//             if (computerSelection === 'rock') {
//                 playerScore++;
//                 return 'You win! Paper covers Rock';
//             } else if (computerSelection === 'paper') {
//                 return 'Draw! You both picked Paper';
//             } else if (computerSelection === 'scissors') {
//                 computerScore++;
//                 return 'You lose! Paper gets cut by Scissors';
//             }
//             break;
//         case 'scissors':
//             if (computerSelection === 'rock') {
//                 computerScore++;
//                 return 'You lose! Scissors gets crashed by Rock';
//             } else if (computerSelection === 'paper') {
//                 playerScore++;
//                 return 'You win! Scissors cuts Paper';
//             } else if (computerSelection === 'scissors') {
//                 return 'Draw! You both picked Scissors';
//             }
//             break;
//     }
// }


function playRound(playerSelection, computerSelection) {
    console.log('Player:', playerSelection, 'Computer:', computerSelection)
    switch(playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                console.log('Draw! You both picked Rock');
            } else if (computerSelection === 'paper') {
                // computerScore++;
                console.log('You lose! Rock gets covered by Paper');
            } else if (computerSelection === 'scissors') {
                // playerScore++;
                console.log('You win! Rock crashes Scissors');
            }
        break;
        case 'paper':
            if (computerSelection === 'rock') {
                console.log('You win! Paper covers Rock');
            } else if (computerSelection === 'paper') {
                // computerScore++;
                console.log('Draw! You both picked Paper');
            } else if (computerSelection === 'scissors') {
                // playerScore++;
                console.log('You Lose! Paper gets cut by Scissors');
            }
        break;
        case 'scissors':
            if (computerSelection === 'rock') {
                console.log('You Lose! Scissors get crushed by Rock');
            } else if (computerSelection === 'paper') {
                // computerScore++;
                console.log('You Win! Scissors cuts Paper');
            } else if (computerSelection === 'scissors') {
                // playerScore++;
                console.log('Draw! You both picked Scissors');
            }
        break;
    }
}

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



// function paperClicked() {

//     let computerSelectionGs = computerPlay();

//     if (computerSelectionGs === 'rock') {
//         console.log('win');
//     }
//     else if (computerSelectionGs === 'paper') {
//         console.log('draw');
//     }
//     else if (computerSelectionGs === 'scissors') {
//         console.log('lose')
//     }

// }

// const paperBtn = document.querySelector('#paper-btn');
// paperBtn.addEventListener('click', paperClicked);


// function scissorsClicked() {

//     let computerSelectionGs = computerPlay();
    
//     if (computerSelectionGs === 'rock') {
//         console.log('lose');
//     }
//     else if (computerSelectionGs === 'paper') {
//         console.log('win');
//     }
//     else if (computerSelectionGs === 'scissors') {
//         console.log('draw')
//     }

// }

// const scissorsBtn = document.querySelector('#scissors-btn');
// scissorsBtn.addEventListener('click', scissorsClicked);

// // creating a loop that will play the multiple times
// function game() {
// // here, i like initializing from 1. that will definitely affect the = and <= sings, take care
//     for(i = 1; i <=5; i++) {
// // i had to put the player selection prompt inside the loop so it gets called all 5 times
// // even the computer play needs to return a random element in a loop of 5. that's why it's 
// // toLowerCase is to format any case inside the prompt to become uniform to what's coded
//         let playerSelectionGs = prompt('Select one of rock, paper, scissors: ', 'Case insensitive but check the spelling').toLowerCase();
// // and these variables have Gs to show it's not the same ones declared in the singleRound()
//         console.log(singleRound(playerSelectionGs, computerSelectionGs));
//         console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)
//     }
//     if (playerScore > computerScore) {
//         console.log('CONGRATULATIONS! YOU WON THE GAME BY '+ (playerScore - computerScore) +' POINT(S)');
//     } else if (computerScore > playerScore) {
//         console.log('YOU LOST BY '+ (computerScore - playerScore) +' POINT(S). BETTER LUCK NEXT TIME');
//     } else {
//         console.log('Draw! Try again');
//     }
// }
// game();