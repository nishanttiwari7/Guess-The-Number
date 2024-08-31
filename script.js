let randomNumber;
let attempts = 0;
const maxAttempts = 6;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = `Attempts: ${attempts}/${maxAttempts}`;
    document.getElementById('guessInput').value = '';
    document.getElementById('submitGuess').disabled = false; 
}

function submitGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attempts++;
    if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
    } else {
        feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('submitGuess').disabled = true; // disable the submit button after winning
        return;
    }

    if (attempts >= maxAttempts) {
        feedback.textContent = `Sorry, you've used all ${maxAttempts} attempts. The number was ${randomNumber}.`;
        document.getElementById('submitGuess').disabled = true; // disable the submit button after losing
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}/${maxAttempts}`;
}

document.getElementById('submitGuess').addEventListener('click', submitGuess);
document.getElementById('restartGame').addEventListener('click', startGame);

// start the game when the page loads
startGame();
