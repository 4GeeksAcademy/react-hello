import React from "react";
import "../../styles/index.css";

const Cards = () => {

    return (
        <div className="cartas-contenedor container p-0">
            <div className="card" style={styles}>
                <img src="https://placehold.it/500x325" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="button-container">
                    <a href="#" className="btn btn-primary button">Find out more!</a>
                </div>
            </div>
            <div className="card" style={styles}>
                <img src="https://placehold.it/500x325" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="button-container">
                    <a href="#" className="btn btn-primary button">Find out more!</a>
                </div>
            </div>
            <div className="card" style={styles}>
                <img src="https://placehold.it/500x325" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="button-container">
                    <a href="#" className="btn btn-primary button">Find out more!</a>
                </div>
            </div>
            <div className="card" style={styles}>
                <img src="https://placehold.it/500x325" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="button-container">
                    <a href="#" className="btn btn-primary button">Find out more!</a>
                </div>
            </div>
        </div>
    )
}

const styles = {
    width: "18rem"
}

export default Cards;