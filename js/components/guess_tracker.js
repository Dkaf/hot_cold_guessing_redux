const React = require('react');
const ReactDOM = require('react-dom');

const connect = require('react-redux').connect;


class GuessTracker extends React.Component {
	render() {
		return (
			<p>Guess #<span id="count">{this.props.guessCount}</span>!</p>
		)
	};
};

let mapStateToProps = (state, props) => {
	return {
		guessCount: state.guessCount
	};
};

let Container = connect(mapStateToProps)(GuessTracker);

module.exports = Container;
