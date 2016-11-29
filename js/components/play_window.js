const React = require('react');
const ReactDOM = require('react-dom');

const Feedback = require('./feedback');
const GuessInput = require('./guess_input');
const GuessButton = require('./guess_button');
const GuessTracker = require('./guess_tracker');
const GuessList = require('./guess_list');

const actions = require('../actions/index');
const store = require('../store');


class PlayWindow extends React.Component {
	constructor(props) {
		super(props);
		this.inputHandler = this.inputHandler.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	inputHandler(e) {
		store.dispatch(actions.makeGuess(e.target.value));
		console.log(store.getState().guess);
	}

	handleClick(e) {
		e.preventDefault();
		store.dispatch(actions.updateGuesses(store.getState().guessCount +1, store.getState().guess));
		console.log(store.getState());
	}

	render() {
		return (
			<section className="game">
				<Feedback text="Make your Guess!" />
				<form>
					<GuessInput inputHandler={this.inputHandler} />
					<GuessButton handleClick={this.handleClick} />
					<GuessTracker />
				</form>
			</section>
		)
	};
};



module.exports = PlayWindow;
