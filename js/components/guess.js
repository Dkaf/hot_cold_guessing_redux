const React = require('react');
const ReactDOM = require('react-dom');

class Guess extends React.Component {
	render() {
		return (
			<div>{this.props.number}</div>
		)
	};
};

module.exports = Guess;
