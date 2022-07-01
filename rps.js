const choice = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return choice[Math.floor(Math.random() * choice.length)];
}

console.log(computerPlay());