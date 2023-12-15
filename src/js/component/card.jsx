import React from "react";

function Cards (){
    let card = (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card my-4">
                <img src="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-primary">
                        Find out more!
                    </button> 
                </div>
            </div>
        </div>
    )

    return (
        <div className="row">
            {card}
            {card}
            {card}
            {card}
        </div>
    );
}

export default Cards;