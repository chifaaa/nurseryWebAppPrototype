import React from 'react';
import Car from './components/carousel';
import './App.css';
import { Features } from './components/features';


function HomePage() {
  return (
    

            <div className="App">

     <Car/>
     <Features/>


     <footer>
    <p>
        Follow Us On: 
        
        <span className="country-link">Facebook</span>, 
        <span className="country-link">YouTube</span>, 
        <span className="country-link">Instagram</span> and 
        <span className="country-link">Twitter</span> <br/><br/>
        This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the
        conditions for storing or accessing cookies on your browser.<br/>
        www.babystorks.com © 2019
    </p>
    </footer> 

  </div>


  );
}

export default HomePage;

