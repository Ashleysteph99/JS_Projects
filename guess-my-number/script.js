'use strict';
// console.log(document.querySelector('.label-score').textContent);
// document.querySelector('.label-score').textContent = "Lol";
// document.querySelector('.guess').value=32
// console.log(document.querySelector('.guess').value); 

const target = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = target;

document.querySelector('.btn.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value.trim();
    
    if (!guess) {
        document.querySelector('.message').textContent = 'Please Enter a Number';
        console.log(`Target number is ${target}`);
        console.log(`Guess is ${guess} which is a type of "${typeof (guess)}"`);
        return;
    }


    const usrGuess = Number(guess);

    if (target == usrGuess) {
        document.querySelector('.message').textContent = 'Correct Guess!!🎉🎉🎉';
    }
    else {
        document.querySelector('.message').textContent = 'Oops, Try Again';
    }
    console.log(`Target number is ${target}`);
    console.log(`Guess is ${usrGuess} which is a type of "${typeof (usrGuess)}"`);

});



