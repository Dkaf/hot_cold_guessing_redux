require('babel-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Game />, document.getElementById('app'));
});
