import { string } from "prop-types";
import React, { useState } from "react"; // Here we are including the {useState} hook to determine whether the <Resources /> components displays or not, depending on whether the value is true or false.
import PropTypes from "prop-types"; // The PropTypes is React's built in typechecking library, for maintaining data types. Check out the official documentation for functional components: https://reactjs.org/docs/typechecking-with-proptypes.html#function-components
import rigoImage from "../../img/rigo-baby.jpg"; //include images into your bundle
import Resources from "./Resources"; //including another component that we can call below as <Resources /> that renders if "showResources" is true
import Footer from "./Footer";

// Below is a function called Home that will be called on the index.js page. It is passing an argument {name} that is given a value on the index.js component.
function Home({ name }) {
	const [showResources, setShowResources] = useState(false); // we can declare a variable and variable update function as a destructured array. The left is the name of our variable, and the right is the name of the update function for that variable. The function should be named the same as the variable, but with the word "set" before it.

	return (
		<div className="text-center mt-5">
			{/* He {name} below receives a value in index.js */}
			<h1>Hello, {name}</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<button
				href="#"
				className="btn btn-success"
				// the onClick below is the event listened for to invoke our function to update the state of showResources. The variable is immutable, meaning it cannot be updated directly and must be give a value through its update function, setShowResources
				onClick={() => setShowResources(!showResources)}>
				Show React JS Resources
			</button>

			{/* The code below will only show the <Resources /> component if showResources is true, otherwise nothing will appear. */}
			{showResources && <Resources />}

			<Footer />
		</div>
	);
}

Home.propTypes = {
	name: PropTypes.string
};

export default Home; // Exporting as default allows the import on index.js to be given a unique name. If you change it on index.js, make sure to update the name in the render method as well.
