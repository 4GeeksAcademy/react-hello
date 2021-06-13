import React from "react";
export function Jumbotron() {
	return (
		<div className="container text-left">
			<div className=" jumbotron row">
				<div className="col col-lg-1"></div>
				<div className="col col-lg-10">
					<h1 className="display-1">A Warm Welcome!</h1>
					<p className="lead">
						Loren ipsum dolor sit amet , consectetur adipisicing
						elit, Ipsa, eligendi , in quo sunt possimus non incidunt
						odit vero aliquid similique quaerat nam nobis illo
						aspernatur vitae fugiat numquam repellat.
					</p>
					<hr className="my-4"></hr>

					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</div>
				<div className="col col-lg-4"></div>
			</div>
		</div>
	);
}
