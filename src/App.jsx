import React from "react";
import Click from "./components/Click";
import Hover from "./components/Hover";
import Ganchos from "./components/Ganchos";
import Form from "./components/Form";


export default class App extends React.Component {

	render() {
		return (<>
			<Form />
			<Ganchos />
			<Hover />
			<Click />
		</>)
	}
}