const React = require('react');
const ReactDOM = require('react-dom');

const PlayWindow = require('./play_window');
const Nav = require('./nav');

class Game extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<h1>HOT or COLD</h1>
				<PlayWindow />
			</div>
		)
	};
};

module.exports = Game;
