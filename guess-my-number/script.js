'use strict';
// console.log(document.querySelector('.label-score').textContent);
// document.querySelector('.label-score').textContent = "Lol";
// document.querySelector('.guess').value=32
// console.log(document.querySelector('.guess').value); 

let target = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = target;

const resetTarget = () => {
    target = Math.trunc(Math.random() * 20) + 1;
    console.log(target);
}

const OgScore = 30;
let currentScore = OgScore;
let gameOver = false;
let highScore = 0;

document.querySelector('.score').textContent = currentScore;

document.querySelector('.btn.again').addEventListener('click', function () {
    gameOver = false;
    let OgScore = 30;
    document.querySelector('.score').textContent = OgScore;
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.highscore').textContent = 0;
    document.querySelector('.message').textContent = 'Start guessing...';
    resetTarget();
    currentScore = OgScore;

});

document.querySelector('.btn.check').addEventListener('click', function () {

    if (gameOver == true) return;

    const guess = document.querySelector('.guess').value.trim();

    if (!guess) {
        document.querySelector('.message').textContent = 'Please Enter a Number';
        console.log(`Target number is ${target}`);
        console.log(`Guess is ${guess} which is a type of "${typeof (guess)}"`);
        return;
    }


    const usrGuess = Number(guess);

    if (target == usrGuess) {
        document.querySelector('.message').textContent = 'Correct Guess!!🎉🎉🎉 You Won Yay';

        if (highScore < currentScore) document.querySelector('.highscore').textContent = currentScore;
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').textContent = target;
        document.querySelector('.number').style.width = '30rem';
        gameOver = true;
        highScore = Number(document.querySelector('.highscore').textContent);
        console.log(`Highscore is${highScore} and currentscore is ${currentScore}`);

    }
    else if (usrGuess < target) {
        document.querySelector('.message').textContent = 'Oops, Think Bigger';
        document.querySelector('.score').textContent = --currentScore;

    }
    else {
        document.querySelector('.message').textContent = 'Oops, Think Lower';
        document.querySelector('.score').textContent = --currentScore;

    }
    console.log(`Target number is ${target}`);
    console.log(`Guess is ${usrGuess} which is a type of "${typeof (usrGuess)}"`);

    if (currentScore <= 0) {
        document.querySelector('.message').textContent = 'You lost the Game!!!';
        document.querySelector('.btn.check').disabled = true;
        gameOver = true;
    }

});



