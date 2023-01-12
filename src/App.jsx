import React from "react";
import Click from "./components/Click";
import Hover from "./components/Hover";
import Ganchos from "./components/Ganchos";
import Form from "./components/Form";
import Efectos from "./components/Efectos";


export default class App extends React.Component {

	render() {
		return (<>
			<Efectos />
			<Form />
			<Ganchos />
			<Hover />
			<Click />
		</>)
	}
}