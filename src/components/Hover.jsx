import React from "react";

export default class Hover extends React.Component {

	handleMouseOver = () => console.log("te veo eoeoeoeoe");

	handleVerde = () => console.log("te veo verdeverderverde");

	render() {
		return (
			<>
				<h3 className="m-2">soy Hover.jsx</h3>
				<div className="p-5 d-flex flex-column">

					<div
						className="bg-secondary p-4"
						onMouseOver={this.handleMouseOver}

					>
						<h1>
							te veo 0.0
						</h1>
					</div>

					<div
						className="bg-success p-4 mt-3"
						onMouseOver={this.handleVerde}
					>
						<h1>
							te veo 0.0
						</h1>
					</div>

				</div>

			</>
		)
	}
}