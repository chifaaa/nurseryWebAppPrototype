import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AssistantList from './components/listAssistants'
import Addbutton from './addbutton.png'

class AssistantsPage extends Component {
  render() { 
    return ( 
      <div> 
        <AssistantList/>
      <Link to="/assistantsPage/AssistantNew"><span><img className='addbutton' src={Addbutton}/></span></Link>
      
 </div>

    );
  }
}
export default AssistantsPage;


