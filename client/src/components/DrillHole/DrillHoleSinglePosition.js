import React, { Component } from 'react';

class DrillHoleSinglePosition extends Component {
	render() {
		return(
			<div className="drillhole-position" key={this.props.id}>
				<ul className="list-group">
					<li className="list-group-item">
						<p><strong>Latitude:</strong> {this.props.latitude}</p>
					</li>
					<li className="list-group-item">
						<p><strong>Longitude:</strong> {this.props.longitude}</p>
					</li>
					<li className="list-group-item">
						<a href={`https://www.google.com/maps/?q=${this.props.latitude},${this.props.longitude}`} 
							target="_blank" 
							className="btn btn-link"
							rel="noopener noreferrer"
						>
							Open In Google Maps
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default DrillHoleSinglePosition;