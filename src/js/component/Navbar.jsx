import React from "react";

export const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container" id="headerNavB">
                <a className="navbar-brand fw-bolder" href="#">
                    Start Bootstrap
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                <ul className="navbar-nav ml-auto text-start">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    );
};