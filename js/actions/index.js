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
const updateGuesses = function(guessCount, guessList) {
	return {
		type: UPDATE_GUESSES,
		guessCount: guessCount,
		guessList: guessList
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
const GAME_RESET ='GAME_RESET';
const gameReset = () => {
	return {
		type: GAME_RESET
	}
};

exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.NEW_ANSWER = NEW_ANSWER;
exports.newAnswer = newAnswer;
exports.UPDATE_GUESSES = UPDATE_GUESSES;
exports.updateGuesses = updateGuesses;
exports.GUESS_TEMP = GUESS_TEMP;
exports.guessTemp = guessTemp;
exports.GAME_RESET = GAME_RESET;
exports.gameReset = gameReset;
