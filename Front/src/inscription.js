import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


import './App.css';

var counter = 0;
class Inscription extends Component {
  render() { 
    return ( 
    <div>
      <div className="app_cont">

      <h1>Our Babies </h1>
      <p className="plink">  <Link to="/inscription/BabyList"><span>Baby list</span></Link>
        </p>
 
      <h1>Parents </h1>
      <p className="plink">  <Link to="/inscription/ParentsList"><span>Parents list</span></Link>
      <Link to="/inscription/ParentNew"><span>Add Parent</span></Link>
        </p>
      </div>
     
 
    
 {/* <Route path="/BabyList"    render={(props) => (
  <BabyList key={(++counter).toString()}  a={++counter} {...props} />)   */}


 </div>

    );
  }
}
export default Inscription;