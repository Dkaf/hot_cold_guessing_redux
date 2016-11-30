const React = require('react');
const ReactDOM = require('react-dom');

const connect = require('react-redux').connect;

const Guess = require('./guess');


class GuessTracker extends React.Component {
	render() {
		let guesses = this.props.guessList.map((guess, i) => {
			return <Guess key={i} number={guess} />
		})
		return (
			<div>
				<p>Guess #<span id="count">{this.props.guessCount}</span>!</p>
				{guesses}
			</div>
		)
	};
};

let mapStateToProps = (state, props) => {
	return {
		guessCount: state.guessCount,
		guessList: state.guessList
	}
};

let Container = connect(mapStateToProps)(GuessTracker);

module.exports = Container;
