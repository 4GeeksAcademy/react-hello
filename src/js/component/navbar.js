import React from "react";
export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse text-right" id="left">
				<ul className="navbar-nav mr-auto ">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link" href="#">
							Servise
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link disabled"
							href="#"
							tabIndex="-1"
							aria-disabled="true">
							contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
