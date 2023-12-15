import React from "react";

function Navbar() {
    let content= (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark px-4">
            <a className="navbar-brand" id="navbar-brand" href="#">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item px-2">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
    return content;
}

export default Navbar;