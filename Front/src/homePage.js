import React from 'react';
import Navb from './components/nav';
import Car from './components/carousel';
import './App.css';
import { Features } from './components/features';
import stork from './cigue.png'
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function HomePage() {
  return (
    

            <div className="App">
     <div className='logoandnav'>
       <img className='logo' src={stork}/> 
       <div className='logotextcontainer'><p className='logotext'>Baby<br/>Storks</p></div>
     <div className='navcontainer'><Navb/></div>
     </div>
     <Car/>
     <Features/>
     <Button variant="contained" color="primary">
      Hello World
    </Button>

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

