import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class AssistantsPage extends Component {
  render() { 
    return ( 
      <div className="app_cont"> 
      <h1>Assistants </h1>
      <p className="plink">  <Link to="/assistantsPage/AssistantsList"><span>Assistants list</span></Link>
      <Link to="/assistantsPage/AssistantNew"><span>Add Assistant</span></Link>
        </p>
 </div>

    );
  }
}
export default AssistantsPage;