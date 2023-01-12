import { useEffect, useState } from "react";
import * as api from "../api"

const Efectos = () => {
	const [count, setCount] = useState(0)
	const [sorpresa, setSorpresa] = useState(10)

	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(false)

	const getData = async () => {
		setLoading(true)
		let data = await api.getPlanets()
		console.log(data);
		setLoading(false)
		setData(data)

	}

	// ejecutar una vez usando arr vacio como segundo parametro
	useEffect(() => {
		getData()
	}, [])


	// ejecutar al inicio y en cada actualización
	useEffect(
		() => {
			document.title = `Hola x ${count} veces`;
			console.log("updated");

			return () => { // al desmontaje
				console.log("chau");
			}
		}
	)


	// ejecutar al inicio y cuando cambian ciertas variables
	useEffect(() => {
		console.log("sorpresitas compa");
	}, [sorpresa])



	const handleClick = () => setCount(count + 1)
	const handleSorpresa = () => setSorpresa(sorpresa + 1)

	return <>
		{console.log("render")}
		<h3 className="m-2">soy Efectos.jsx</h3>

		{loading && <h3 className="m-2"> :D cargando...</h3>}

		{data && data.results.map(e => <p>{e.name}</p>)}


		<div className="p-5 d-flex flex-column">


			<button onClick={handleClick}
				className="btn btn-primary">
				Holas x {count} veces
			</button>

			<button onClick={handleSorpresa}
				className="mt-3 btn btn-info">
				Sorpresa
			</button>

		</div>
	</>
}

export default Efectos