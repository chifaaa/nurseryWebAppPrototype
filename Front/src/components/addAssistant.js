import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom';
class AssistantAdd extends Component {
  constructor(props){
    super(props)
    this.state=({
        firstName:'',
        lasttName:'',
      tel:'',
      email:'',
      adress:'',
     
    })
  }

  setName=e=> { 

    this.setState({
    firstName:e.target.value
    
  })}
  setLastname=e=> {  this.setState({
    lastName:e.target.value
    
  })}

  setTel=e=> {  this.setState({
    tel:e.target.value
    
  })}
  setEmail=e=> {  this.setState({
    email:e.target.value
    
  })}
  setAdress=e=> {  this.setState({
    adress:e.target.value
    
  })}

  addAssistant = () => {
    if (this.state.firstName !== '' && (this.state.lastName !== '' || this.state.tel !== ''|| this.state.adress !== ''||this.state.email !== '')) {
    axios.post("http://localhost:3000/assistant/create",{
     firstName:this.state.firstName,lastName:this.state.lastName,tel:this.state.tel,email:this.state.email,adress:this.state.adress
    })
 
  }

else { alert('Required fields!! Name and tel and email and adress') }
}

       render() { 

        return ( 

       
           <form >
        <h2>
          ADD assistant
        </h2>
        <br/>
        <br/>
        <span className="subtitle">FIRSTNAME:</span>
        <br/>
        <input type="text" onChange={this.setName}  />
        <br/>
        <span className="subtitle">LASTNAME:</span>
        <br/>
        <input type="text" onChange={this.setLastname}  />
        <br/>
        <br/>
        <span className="subtitle">TEL:</span>
        <br/>
        <input type="text" onChange={this.setTel}  />
        <br/>
        <span className="subtitle"> EMAIL:</span>
        <br/>
        <input type="text" onChange={this.setEmail}  />
        <br/>
        <span className="subtitle">ADRESS:</span>
        <br/>
        <input type="text" onChange={this.setAdress}  />
        <br/>
   
        <br/>
       
  
        <br/>
  
             
        <Link to="/inscription/AssistantsList"> <span onClick={this.addAssistant} >Submit</span> </Link> 
  

     </form>    

 

      
      );
    }
}
 
export default AssistantAdd ;