import React from "react";
import '../../styles/index.css';
    const Welcome= () => {
        return (
            
            <div className="container-fluid d-flex justify-content-around " style={{width: '81%'}} >
                
                
                    <div className="card-body d-flex jumbotron p-5 bg-secondary">
                        <h1 className="card-title">A warm Welcome!</h1>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare arcu sagittis interdum lobortis. Donec volutpat ligula non odio maximus commodo. In auctor, nunc quis ultrices mollis.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                
              
            </div>
          
        )
        
}
export default Welcome;