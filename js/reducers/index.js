const Actions = require('../actions/index');
let initialState = {
	guessCount: 0,
	guessList: []
};

let gameReducer = function(state = initialState, action) {
	switch (action.type) {
		case Actions.MAKE_GUESS:
			return Object.assign({}, state, {
				guess: action.guess
			})

		case Actions.NEW_ANSWER:
			return Object.assign({}, state, {
				answer: action.answer
			});

		case Actions.UPDATE_GUESSES:
			return Object.assign({}, state, {
				guessCount: action.guessCount,
				guessList: state.guessList.concat(action.guessList)
			});

		case Actions.GUESS_TEMP:
			return Object.assign({}, state, {
				guessTemp: action.guessTemp
			});

		case Actions.GAME_RESET:
			return state = initialState;
		default:
			return state;
	}
};

exports.gameReducer = gameReducer;
