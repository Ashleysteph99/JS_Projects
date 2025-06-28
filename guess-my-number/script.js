'use strict';
// console.log(document.querySelector('.label-score').textContent);
// document.querySelector('.label-score').textContent = "Lol";
// document.querySelector('.guess').value=32
// console.log(document.querySelector('.guess').value); 

let target = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.number').textContent = target;

let OgScore = 30;
let gameOver = false;

document.querySelector('.score').textContent = OgScore;

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
        document.querySelector('.highscore').textContent = OgScore;
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').textContent = target;
        gameOver = true;
    }
    else if (usrGuess < target) {
        document.querySelector('.message').textContent = 'Oops, Think Bigger';
        document.querySelector('.score').textContent = --OgScore;
        document.querySelector('body').style.background = '#222';
    }
    else {
        document.querySelector('.message').textContent = 'Oops, Think Lower';
        document.querySelector('.score').textContent = --OgScore;
        document.querySelector('body').style.background = '#222';
    }
    console.log(`Target number is ${target}`);
    console.log(`Guess is ${usrGuess} which is a type of "${typeof (usrGuess)}"`);

    if (OgScore <= 0) {
        document.querySelector('.message').textContent = 'You lost the Game!!!';
        document.querySelector('.btn.check').disabled = true;
    }

});



