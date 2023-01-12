import React from "react";

import ABDUL_IMG from "./abdul.png"

const IMG_LINK = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticg.sportskeeda.com%2Feditor%2F2021%2F05%2Faba7b-16220973243070-800.jpg&f=1&nofb=1&ipt=553e8b3e6fd166d50342c40031abb216bdbd34a8e2f0b3d7b0292aa48f04f30b&ipo=images"

export default class Click extends React.Component {
	constructor(props) {
		super(props)
		this.methodHandler = this.methodHandler.bind(this)
	}

	hasbullaHandler = () => console.log("hasbulla")
	abdulHandler = () => console.log("abdul")

	clickHandler = () => console.log("click")

	methodHandler() {
		console.log(":o soy regular function method");
		console.log(this);
	}

	arrowHandler = () => {
		console.log(":) soy arrow method");
		console.log(this); // app
	}



	render() {
		return (
			<>
				<h3 className="m-2">soy Click.jsx</h3>
				<div className="p-5 d-flex flex-column">

					<button
						onClick={this.clickHandler}
						className="btn btn-info mb-2"
					>
						dame tu click
					</button>

					<button
						onClick={this.methodHandler}
						className="btn btn-danger mb-2"
					>
						el "this" function
					</button>

					<button
						onClick={this.arrowHandler}
						className="btn btn-success mb-2"
					>
						el "this" arrow
					</button>

					<img src={IMG_LINK} alt="" srcSet="" onClick={this.hasbullaHandler} />
					<img className="mt-2" src={ABDUL_IMG} alt="" srcSet="" onClick={this.abdulHandler} />
				</div>
			</>
		)
	}
}