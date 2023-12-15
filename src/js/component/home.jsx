import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./card.jsx"
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Cards />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
