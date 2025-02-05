const Card = () => {
    return (
        <div className="card mb-4">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0J3nxJdBbNvZ0-BRgtoOJMRTU_6sMjoqiQ&s" 
                className="card-img-top" 
                alt="Placeholder Image" 
            />

            <div className="card-body">
                
                <h5 className="card-title">Magic Gathering</h5>
                
                <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dolorum 
                    similique officia enim tenetur consequatur est animi eos illo libero!
                </p>
                
                <a href="https://magic.wizards.com/es" className="btn btn-primary">Magic Website</a>
            
            </div>
        </div>
    );
};


export default Card;

// Hecho por Yenesey Bastida

