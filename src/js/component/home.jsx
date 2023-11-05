import React from "react";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
import Header from "./header.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <Header />
      <Jumbotron />  
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
