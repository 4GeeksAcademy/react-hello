import React from "react";
import PropTypes from 'prop-types';

//create your first component
const Jumbotron = props => {
	return (
        <div className="p-1 p-sm-5 m-0 m-sm-4 bg-light rounded-3">
            <div className="container py-5">
                <h1 className="display-5 fw-bold">{props.header}</h1>
                <p className="fs-4">{props.description}</p>
                <button className="btn btn-primary btn-lg" type="button">{props.buttonLabel}</button>
            </div>
        </div>
	);
};

Jumbotron.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string
}

export default Jumbotron;