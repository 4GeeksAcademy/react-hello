import React from "react";

export const Card = (props) => {

    return (
       <div className="card text-center">
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title"> Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur cupiditate officiis, odit, soluta adipisci, sapiente eum aliquid rem officia.
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <a href="#" className="btn btn-primary">Find out more</a>
                </li>
            </ul>
       </div>
    );
};

