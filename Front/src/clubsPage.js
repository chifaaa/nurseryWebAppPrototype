


import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ClubsList from './components/listClubs'
import Addbutton from './addbutton.png'

class ClubsPage extends Component {
  render() { 
    return ( 
   
   
      <div>
       
       <ClubsList/>
      <Link to="/clubsPage/ClubNew"><span><img className='addbutton' src={Addbutton}/> </span></Link>
        
        </div>

 


    );
  }
}
export default ClubsPage;

