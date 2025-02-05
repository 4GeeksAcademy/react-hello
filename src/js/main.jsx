import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Navbar />
    <Jumbotron />

    
    <div className="container">
      <div className="row justify-content-center g-3">
        <div className="col-12 col-sm-6 col-md-3 p-2">
          <Card />
        </div>
        <div className="col-12 col-sm-6 col-md-3 p-2">
          <Card />
        </div>
        <div className="col-12 col-sm-6 col-md-3 p-2">
          <Card />
        </div>
        <div className="col-12 col-sm-6 col-md-3 p-2">
          <Card />
        </div>
      </div>
    </div>

    <Footer />

  </React.StrictMode>,
)

// Hecho por Yenesey Bastida