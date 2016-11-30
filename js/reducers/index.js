const Actions = require('../actions/index');


let initialState = {
	guessCount: 0,
	guessList: [],
	feedback: 'Make your Guess!'
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
				guessCount: state.guessCount + 1,
				guessList: state.guessList.concat(action.guessList),
			});

		case Actions.GUESS_TEMP:
		let temp;

		if (state.guess == state.answer) {
			temp = "You Won!"
		}
		else if (state.guess >= state.answer + 1 && state.guess <= state.answer + 10 || state.guess <= state.answer - 1 && state.guess >= state.answer - 10 ) {
			temp = "Very Hot!"
		}
		else if (state.guess >= state.answer + 10 && state.guess <= state.answer + 20 || state.guess <= state.answer - 10 && state.guess >= state.answer - 20 ) {
			temp = "Hot"
		}
		else if (state.guess >= state.answer + 20 && state.guess <= state.answer + 30 || state.guess <= state.answer - 20 && state.guess >= state.answer - 30 ) {
			temp ="Warm"
		}
		else if (state.guess >= state.answer + 30 && state.guess <= state.answer + 50 || state.guess <= state.answer - 30 && state.guess >= state.answer - 50 ) {
			temp = "Cold"
		}
		else if (state.guess >= state.answer + 50 && state.guess < 101 || state.guess <= state.answer - 50 && state.guess < 101) {
			temp = "Ice Cold"
		}

		return Object.assign({}, state, {
			feedback: temp
		});

		case Actions.GAME_RESET:
			return Object.assign({}, initialState, {
				answer: action.answer
			});

		case Actions.FETCH_LEAST_SUCCESS:
			return Object.assign({}, state, {
				least: action.least
			});

		default:
			return state;
	}
};

exports.gameReducer = gameReducer;
