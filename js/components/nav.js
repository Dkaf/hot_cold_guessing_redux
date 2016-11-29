const React = require('react');
const ReactDOM = require('react-dom');
const OptionLink = require('./option_link');

const actions = require('../actions/index');
const store = require('../store');

class Nav extends React.Component {

	clickHandler(e) {
		e.preventDefault();
		store.dispatch(actions.gameReset());
		console.log(store.getState());
	}

	render(){
		return (
			<nav>
				<ul className="clearfix">
					<OptionLink className="what" href="#" text="What ?" />
					<OptionLink className="new" href="#" text="+ New Game" onClick={this.clickHandler} />
				</ul>
			</nav>
		)
	};
};

module.exports = Nav;
