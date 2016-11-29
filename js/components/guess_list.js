const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;

class GuessList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let guesses = this.props.guesses.map( function(guessId) {
			let guess = this.props.guesses[guessId];
			return (
				<Guess number={guess} />
			)
		});
		return (
			<div>
				<ul id="guessList" class="guessBox clearfix">
					{guesses}
					</ul>
			</div>
		)
	};
};

let mapStateToProps = (state, props) => {
	return {
		guesses: state.guessList
	};
};

let Container = connect(mapStateToProps)(GuessList);
