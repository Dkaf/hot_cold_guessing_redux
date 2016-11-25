//Guess a number
const MAKE_GUESS = 'MAKE_GUESS';
const makeGuess = function(guess) {
	return {
		type: MAKE_GUESS,
		guess: guess
	}
};

//Get a new number
const NEW_ANSWER = 'NEW_ANSWER';
const newAnswer = function(answer) {
	return {
		type: NEW_ANSWER,
		answer: answer
	}
};

//Update guess count
const UPDATE_GUESSES = 'UPDATE_GUESSES';
const updateGuesses = function(guessCount) {
	return{
		type: RESET_GUESSES,
		guessCount: guessCount
	}
};
//Hotter or Colder
const GUESS_TEMP = 'GUESS_TEMP';
const guessTemp = function(temp) {
	return {
		type: GUESS_TEMP,
		temp: temp
	}
};

//Reset game
