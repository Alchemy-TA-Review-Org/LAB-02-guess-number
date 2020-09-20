
const button = document.getElementById('guess-number');
const userGuess = document.getElementById('user-input');
const highOrLow = document.getElementById('high-or-low');
const triesRemaining = document.getElementById('remain');
const endPrase = document.getElementById('end-phrase');


const corectAswer = Math.ceil(Math.random() * 20);
let triesNumb = 5;

button.addEventListener('click', () => {
    triesNumb--;
    if (triesNumb === 0) {
        button.disabled = true;
        triesRemaining.textContent = 0;
        return endPrase.textContent = 'You lose'; 
        
    }
    const guess = Number(userGuess.value);
    const result = compareNumbers(guess, corectAswer);
    if (result === 0) {
        button.disabled = true;
        endPrase.textContent = 'you win';
    }
    if (result === -1) {
        endPrase.textContent = 'too Low';
    }
    if (result === +1) {
        endPrase.textContent = 'too High';
    }
    triesRemaining.textContent = triesNumb;
  
  
});

function compareNumbers(guess, corectAswer) {
    if (guess === corectAswer) {
        return 0;
    }
    if (guess < corectAswer) {
        return -1;
    }
    if (guess > corectAswer) {
        return 1;
    }
  
}

