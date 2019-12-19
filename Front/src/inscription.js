import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import stork from './cigue.png'
import Navb from './components/nav';
import './App.css'


class Inscription extends Component {
  render() {
    return (
      <div>
        <div className="app_cont">



       

            
          
            

          {/* <h1>Our Babies </h1>
          <p className="plink">  <Link to="BabyList"><span>Baby list</span></Link>
          </p> */}

          <h1>Parents </h1>
          <p className="plink">  <Link to="/inscription/ParentsList"><span>Parents list</span></Link>
            <Link to="/inscription/ParentNew"><span>Add Parent</span></Link>
          </p>



          <h1>Assistants </h1>
          <p className="plink">  <Link to="/inscription/AssistantsList"><span>Assistants list</span></Link>
            <Link to="/inscription/AssistantNew"><span>Add Assistant</span></Link>
          </p>

        </div>


      </div>

    );
  }
}
export default Inscription;