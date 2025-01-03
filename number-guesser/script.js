// Establishes the beginning scores and round numbers. Let used as these will change
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// generate a random number between 0-9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

console.log(generateTarget());

// compare the guesses between human, computer and target to see who is closest
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  // Math.abs object ensures that the number returned is a non-negative number
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);

  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};
console.log(compareGuesses);

// Update the score for each player
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

// Advance the round after each one is played
const advanceRound = () => currentRoundNumber++;
