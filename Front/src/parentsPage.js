import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ParentList from './components/listParents'
import Addbutton from './addbutton.png'

class ParentsPage extends Component {
  render() { 
    return ( 
   
   


 
      <div>
      <ParentList/>
       <Link to="/parentsPage/ParentNew"><img className='addbutton' src={Addbutton}/> </Link>
      

      </div>

    );
  }
}
export default ParentsPage;

