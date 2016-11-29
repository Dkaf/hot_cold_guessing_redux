const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;

const actions = require('../actions/index');
const store = require('../store');

class GuessButton extends React.Component {


	render() {
		return (
			<button onClick={this.props.handleClick} id="guessButton" className="button" name="submit" >
				Guess
			</button>

		)
	}
};

var Container = connect()(GuessButton);

module.exports = Container;
