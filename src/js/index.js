//import react into the bundle
import React from "react";
import ReactDOM from "react-dom"; // We are importing ReactDOM on this component because it is how React renders <Components /> in the browsers

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/Home.js";

//render your react application using ReactDOM's render method. The render method is receiving 2 arguments: 1. the content to display, which in this example is the <Home/> component and 2. the name of the target element on the template.html file, a div with an id of "app".When the Home component is called, we are passing through a value of "Rigo!" for the "name" property. Try changing "Rigo" to your name!
ReactDOM.render(<Home name="Rigo!" />, document.querySelector("#app"));
