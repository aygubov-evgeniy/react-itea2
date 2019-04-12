import React, { Component } from 'react';

class GuestItem extends Component {
	state = {
		arrived: false
	}

	checkGuest = (e) => {
		this.setState({
			arrived: e.target.checked
		})
	}

	render() {
		const { arrived } = this.state;
		const { guest } = this.props;
		const { checkGuest } = this;

		return (
			<li className={ arrived ? "list-group-item arrived" : "list-group-item" }>
				{ guest.name }

				<input type="checkbox" onChange={checkGuest} />
			</li>
		);
	}
}

export default GuestItem;