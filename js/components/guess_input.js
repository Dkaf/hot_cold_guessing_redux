const React = require('react');
const ReactDOM = require('react-dom');


class GuessInput extends React.Component {
	render() {
		return (
			<input
			onChange={this.props.inputHandler}
			type="text"
			name="userGuess"
			id="userGuess"
			className="text"
			maxlength="3"
			autocomplete="off"
			placeholder="Enter your Guess"
			required/>
		)
	};
};

module.exports = GuessInput;
