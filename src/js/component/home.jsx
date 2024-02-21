import React from "react";
import NavBar from "./navbar";
import Welcome from "./welcome"
import Carrousel from "./carousel";
import Footer from "./footer";
//create your first component
const Home = () => {
	return (
		<div className="content">
			<NavBar />
			<Welcome />
			<Carrousel />
			<Footer />
		</div>
	);
};

export default Home;
