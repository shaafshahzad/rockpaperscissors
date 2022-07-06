const choice = ['rock', 'paper', 'scissors'];
let playerPoints = 0
let computerPoints = 0
const buttons = document.querySelectorAll('input')
let outcome = '';
let totalScore = '';
let i = 0;

function playRound(playerSelection){
    const computerSelection = computerPlay();

    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'rock'){

        playerPoints += 1;
        outcome = ('Player wins, ' + playerSelection + ' beats ' + computerSelection);
        totalScore = ("<br><br>Player: " + playerPoints + "<br>Computer: " + computerPoints);
 
    } else if (playerSelection == computerSelection){
        outcome = ('Tie, both the player and computer picked the same object.')
        totalScore = ("<br><br>Player: " + playerPoints + "<br>Computer: " + computerPoints);

    } else {
        computerPoints += 1;
        outcome = ('Computer wins, ' + computerSelection + ' beats ' + playerSelection);
        totalScore = ("<br><br>Player: " + playerPoints + "<br>Computer: " + computerPoints);
    }

    document.getElementById('outcome').innerHTML = outcome;
    document.getElementById('totalScore').innerHTML = totalScore;
    checkWinner();
    return;

}

function checkWinner(){
    if (playerPoints === 3) {
        outcome = 'Player wins. Refresh to play again.';
        disableButtons();
    } else if (computerPoints === 3) {
        outcome = 'Computer wins. Refresh to play again.';
        disableButtons();
    }

    document.getElementById('outcome').innerHTML = outcome;
    return;
    
}

function computerPlay(){
    return choice[Math.floor(Math.random() * choice.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
})