var fetch = require('isomorphic-fetch');

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
const updateGuesses = function(guessList) {
	return {
		type: UPDATE_GUESSES,
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
const gameReset = (num) => {
	return {
		type: GAME_RESET,
		answer: num
	}
};

const FETCH_LEAST_SUCCESS = 'FETCH_LEAST_SUCCESS';
const fetchLeastSuccess = (least) => {
	return {
		least: least
	}
};

const FETCH_LEAST_ERROR = 'FETCH_LEAST_ERROR';
const fetchLeastError = (error) => {
	return {
		error: error
	}
};

const fetchLeast = () => {
	return (dispatch) => {
		const url = 'localhost:8080/fewest-guesses';
		fetch(url)
		.then( (response) => {
			return response.json();
		})
		.then( (data) => {
			let bestGuesser = data.bestGuesser;
			return dispatch(
				fetchLeastSuccess(bestGuesser)
			);
		})
		.catch( (error) => {
			return dispatch(
				fetchLeastError(error)
			);
		});
	}
};

const saveLeast = (newLeast) => {
	const request = new Request('localhost:8080/fewest-guesses', {
		method: 'POST',
		body: JSON.stringify({
			bestGuesser: newLeast
		})
	});
	return fetch(request);
}

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
exports.FETCH_LEAST_SUCCESS = FETCH_LEAST_SUCCESS;
exports.fetchLeastSuccess = fetchLeastSuccess;
exports.FETCH_LEAST_ERROR = FETCH_LEAST_ERROR;
exports.fetchLeastError = fetchLeastError;
exports.fetchLeast = fetchLeast;
exports.saveLeast = saveLeast;
