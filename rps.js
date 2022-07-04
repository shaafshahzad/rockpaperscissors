const choice = ['rock', 'paper', 'scissors'];
let playerPoints = 0
let computerPoints = 0
const buttons = document.querySelectorAll('input')

function game(){
    playRound();
}

function computerPlay(){
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection){
    const computerSelection = computerPlay();
    let outcome = '';
    let totalScore = '';

    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'rock'){

        playerPoints += 1;
        outcome = ('Player wins. ' + playerSelection + ' beats ' + computerSelection);
        totalScore = ("<br><br>Player: " + playerPoints + "<br>Computer: " + computerPoints);

        if (playerPoints == 5){
            outcome = ('Player wins the game.')
        }
 
    } else if (playerSelection == computerSelection){
        outcome = ('Tie. Both player and computer picked the same object.')
        totalScore = ("<br><br>Player: " + playerPoints + "<br>Computer: " + computerPoints);

    } else {
        computerPoints += 1;
        outcome = ('Computer wins. ' + computerSelection + ' beats ' + playerSelection);
        totalScore = ("<br><br>Player: " + playerPoints + "<br>Computer: " + computerPoints);

        if (computerPoints == 5){
            outcome = ('Computer wins the game.');
        }        
    }

    document.getElementById('outcome').innerHTML = outcome;
    document.getElementById('totalScore').innerHTML = totalScore;
    return;

}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
})


