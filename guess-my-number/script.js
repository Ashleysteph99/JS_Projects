'use strict';
// console.log(document.querySelector('.label-score').textContent);
// document.querySelector('.label-score').textContent = "Lol";
// document.querySelector('.guess').value=32
// console.log(document.querySelector('.guess').value); 

document.querySelector('.btn.check').addEventListener('click', function () {
   console.log(document.querySelector('.guess').value);
    document.querySelector('.message').textContent='Correct Guess!!🎉🎉🎉';
})
