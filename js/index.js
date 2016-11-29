require('babel-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;

const store = require('./store');
const Game = require('./components/game');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
		<Provider store={store}>
			<Game />
		</Provider>,
		document.getElementById('app')
	);
});
