


import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import GroupList from './components/listGroups'
import Addbutton from './addbutton.png'

class GroupsPage extends Component {
  render() { 
    return ( 
   
   
      <div>
       
       <GroupList/>
      <Link to="/groupsPage/GroupNew"><span><img className='addbutton' src={Addbutton}/> </span></Link>
        
        </div>

 


    );
  }
}
export default GroupsPage;

