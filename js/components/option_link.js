const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');
const Link = router.Link;

class OptionLink extends React.Component {
	render() {
		return (
			<li>
				<a className={this.props.className} href={this.props.href} onClick={this.props.onClick}>{this.props.text}</a>
			</li>
		)
	};
};

module.exports = OptionLink;
