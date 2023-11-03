// notice that we have to import react for every component!
import React from "react";

//include your components into your bundle

//here we will import all our components to make the home page component <Home />
import CardComponent from "./card.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";


//create your first component
const Home = () => {
	return (

		<div>
			<NavbarComponent 
				badge="Start Bootstrap"
				buttons={["Home", "About", "Services", "Contact"]}
			/>
			<Jumbotron 
				header="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
				buttonLabel="Let's Go!" 
			/>
      <Container>
		<Row>
			<Col> <CardComponent/></Col>
			<Col> <CardComponent/></Col>
			<Col> <CardComponent/></Col>
			<Col> <CardComponent/></Col>
		</Row>
	   </Container>
		</div>

	);
};

export default Home;