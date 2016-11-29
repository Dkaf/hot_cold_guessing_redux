const React = require('react');
const ReactDOM = require('react-dom');

class Feedback extends React.Component {
	render() {
		return (
			<h2 id="feedback">{this.props.text}</h2>

		)
	};
};

module.exports = Feedback;
