const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;

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
		store.dispatch(actions.gameReset(this.random()));
	}

	random() {
		return Math.floor((Math.random() * 99) + 1);
	}

	inputHandler(e) {
		store.dispatch(actions.makeGuess(e.target.value));
		console.log(store.getState().guess);
	}

	handleClick(e) {
		e.preventDefault();
		store.dispatch(actions.updateGuesses(store.getState().guess));
		store.dispatch(actions.guessTemp());
		console.log(store.getState());
	}

	render() {
		return (
			<section className="game">
				<Feedback text={this.props.feedback} />
				<form>
					<GuessInput inputHandler={this.inputHandler} />
					<GuessButton handleClick={this.handleClick} />
					<GuessTracker />
				</form>
			</section>
		)
	};
};

let mapStateToProps = (state, props) => {
	return {
		feedback: state.feedback
	};
};

let Container = connect(mapStateToProps)(PlayWindow);

module.exports = Container;
