'use strict';
// console.log(document.querySelector('.label-score').textContent);
// document.querySelector('.label-score').textContent = "Lol";
// document.querySelector('.guess').value=32
// console.log(document.querySelector('.guess').value); 

const target =Math.trunc(Math.random()*20)+1;

document.querySelector('.btn.check').addEventListener('click', function () {
    const guess=document.querySelector('.guess').value.trim(); 
    
    if(!guess){
        document.querySelector('.message').textContent='Please Enter a Number';
        console.log(`Guess is ${guess} which is a type of "${typeof(guess)}"`);
        return;
    }

    const usrGuess= Number(guess); 

    console.log(`Guess is ${guess} which is a type of "${typeof(guess)}"`);
    document.querySelector('.message').textContent='Correct Guess!!🎉🎉🎉';
})
