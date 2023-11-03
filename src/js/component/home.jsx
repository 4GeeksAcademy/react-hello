import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./Navbar"
import Cards from "./cards";
import Footer from "./footer";
import Jumbotron from './jumbotron'
//create your first component

const Home = () => {
	return (
		<div className="text-center">
			<Router>
				<Navbar/>
			</Router>
			<Router>
				<Jumbotron/>
			</Router>
			<Router>
				<Cards/>
			</Router>
<Router>
	<Footer/>
</Router>
</div>
	);
};

export default Home;