import { useState } from "react";

const Form = () => {
	const [username, setUsername] = useState(" ")

	const handleUsernameChange = (e) => {
		console.log(e.target.value)
		setUsername(e.target.value)
	}

	const clearUsername = () => {
		setUsername(" ")
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const respuestas = {
			usernameState: username,
			usernameEvent: e.target.username.value
		}

		enviarForm(respuestas)

		console.log("enviado");

		clearUsername()
	}

	const enviarForm = (_respuestas) => {
		console.log("enviando respuestas...", _respuestas);
	}

	return <>
		<h3 className="m-2">soy Form.jsx</h3>
		<div className="p-5 d-flex flex-column">
			<form onSubmit={handleSubmit}>

				<div className="input-group mb-3">
					<span className="input-group-text" id="basic-addon1">@</span>
					<input
						value={username} type="text" name="username"
						className="form-control" placeholder="Username ;)"
						onChange={handleUsernameChange}
					/>
				</div>


				<button
					className="btn btn-success"
					type="submit"
				>
					enviar
				</button>
			</form>

		</div>
	</>
}

export default Form