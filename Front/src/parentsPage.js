import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class ParentsPage extends Component {
  render() { 
    return ( 
   
    <div className="app_cont">


 
      <h1>Parents </h1>
      <p className="plink">  <Link to="/parentsPage/ParentsList"><span>Parents list</span></Link>
      <Link to="/parentsPage/ParentNew"><span>Add Parent</span></Link></p>

    </div>

    );
  }
}
export default ParentsPage;