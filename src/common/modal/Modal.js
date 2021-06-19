import React from 'react';
import './Modal.css';

class Modal extends React.Component {

	state = {
		isOpen: false
	}

	render() {
		return (
			<>
				<button onClick={() => { this.setState({ isOpen: true }) }}>Open modal</button>
				{
					this.state.isOpen ?
						<div className="modal">
							<div className="modalBody">
								<h1>Modal Title</h1>
								<p>I am awesome modal</p>
								<button onClick={() => { this.setState({ isOpen: false }) }}>Close modal</button>
							</div>
						</div> : null
				}

			</>
		)
	}
}

export default Modal
