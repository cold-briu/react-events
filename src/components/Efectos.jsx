import { useEffect, useState } from "react";

const Efectos = () => {
	const [count, setCount] = useState(0)
	const [sorpresa, setSorpresa] = useState(10)

	// ejecutar una vez usando arr vacio como segundo parametro
	useEffect(() => {
		console.log("@@ una sola vez");
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