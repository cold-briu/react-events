import React from "react";
import Click from "./components/Click";
import Hover from "./components/Hover";
import Ganchos from "./components/Ganchos";


export default class App extends React.Component {

	render() {
		return (<>
			<Ganchos />
			<Hover />
			<Click />
		</>)
	}
}