import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">
				To do list:
			</h1>
			<hr />
			<input type="text" placeholder="Escribe una tarea" />
			<button type="button">Enviar tarea</button>
			
		</div>
	);
};

export default Home;
