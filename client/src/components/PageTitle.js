import React, { Component } from 'react';

class PageTitle extends Component {
	render() {
		return(
			<div className="page-title">
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}

export default PageTitle;