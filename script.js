

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

console.log(computerPlay());