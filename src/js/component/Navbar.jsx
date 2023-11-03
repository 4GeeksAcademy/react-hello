import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container spac navbar-hijo">
                <a className="navbar-brand col-8 " href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-links" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;