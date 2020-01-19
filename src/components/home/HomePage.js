import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = ()=>{
    return ( 
        <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>React Redux and React-Router for ultra responsive pages</p>
            <Link to="about" className="btn btn-primary btn-large">Learn More</Link>
        </div>
    );
}

export default HomePage;