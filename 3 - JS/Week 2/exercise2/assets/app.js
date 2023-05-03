const randomNumber1To10 = () => Math.floor(Math.random() * 10) + 1;

const guessNumber = () => {
  const randomNumber = randomNumber1To10();
  let guessedNumber = parseInt(prompt("Guess the number between 1 to 10:"));

  while (guessedNumber !== randomNumber) {
    if (guessedNumber < randomNumber) {
      guessedNumber = parseInt(prompt("Higher!"));
    } else if (guessedNumber > randomNumber) {
      guessedNumber = parseInt(prompt("Lower!"));
    }
  }

  alert("You guessed the correct number:" + randomNumber);
};

document.querySelector("#startGame").addEventListener("click", guessNumber);
