import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx"
import { Jumbotron } from "./Jumbotron.jsx"
import { Card } from "./Card.jsx"
import { Footer } from "./Footer.jsx"

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
          <Jumbotron/>
          <div className="Cards container">
            <div className="row">
              <div className="col-md-3 mt-3">
                <Card img="https://via.placeholder.com/500x325" />
              </div>
              <div className="col-md-3 mt-3">
                <Card img="https://via.placeholder.com/500x325" />
              </div>
              <div className="col-md-3 mt-3">
                <Card img="https://via.placeholder.com/500x325" />
              </div>
              <div className="col-md-3 mt-3">
                <Card img="https://via.placeholder.com/500x325" />
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
};

export default Home;