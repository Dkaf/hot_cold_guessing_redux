const Actions = require('../actions/index');
let initialState = {
	answer:,
	guessCount: 0,
};

let gameReducer = function(state, action) {
	state = state || initialState
	if (action.type === Actions.makeGuess) {
		return Object.assign({}, state, {
			guess: action.guess
		});
	}
	else if (action.type === Actions.newAnswer) {
		return Object.assign({}, state, {
			answer: action.answer
		});
	}
	else if (action.type === Actions.updateGuesses) {
		return Object.assign({}, state, {
			guessCount: action.guessCount
		});
	}
	else if(action.type === Actions.guessTemp) {
		return Object.assign({}, state, {
			guessTemp: action.guessTemp
		});
	}

	return state;
};

exports.gameReducer = gameReducer;
