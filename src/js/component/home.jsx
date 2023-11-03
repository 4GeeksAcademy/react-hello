import React from "react";
import { Lista } from "./lista.jsx";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <h1 className="text-center m-5">Pendientes</h1>
          <Lista />
        </div>
      </div>
    </div>
  );
};

export default Home;

