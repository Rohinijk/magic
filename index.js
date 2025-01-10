var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 10;
var BoxCount = 0;

document.getElementById('btn').addEventListener('click', function () {
    var guess = parseInt(document.getElementById('guessInput').value);
    const lock = document.getElementById('lock');

    if (guess === randomNumber) {
        BoxCount++; 
        lock.src = 'open.jpg';
        display("Congratulations you Opened the box " + BoxCount);
        display("Guess the next number to open another box");
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 10;

        setTimeout(() => {
            lock.src = 'lock.jpg';
            display("Guess the number to open the box " + (BoxCount + 1)); 
            document.getElementById('guessInput').value = '';
        }, 5000);

        if (BoxCount === 5) {
            display('Congratulations!!! You Opened all the Box');
            document.getElementById('btn').disabled = true;
            document.getElementById('guessInput').disabled = true;
        }
    } else if (guess < randomNumber) {
        display("Number is too low. Try a higher number");
    } else {
        display("Number is too high. Try a lower number");
    }

    attempts--;
    if (attempts === 0) {
        display('Game Over! Try Again');
    }
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}