import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class GroupsPage extends Component {
  render() { 
    return ( 

      <div className="app_cont">
        <h1>Groups </h1>
      <p className="plink">  <Link to="/groupsPage/groupsList"><span>Groups list</span></Link>
      <Link to="/groupsPage/GroupNew"><span>Add A New Group</span></Link>
        </p>
        </div>

    );
  }
}
export default GroupsPage;