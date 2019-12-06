import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom';
class ParentAdd extends Component {
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
    groupName:e.target.value
    
  })}

  addParent = () => {
    if (this.state.firstName !== '' && (this.state.lastName !== '' || this.state.tel !== ''|| this.state.adress !== ''||this.state.email !== '')) {
    axios.post("http://localhost:3000/parent/create",{
     firstName:this.state.firstName,lastName:this.state.lastName,tel:this.state.tel,email:this.state.email,adress:this.state.adress
    })
 
  }

else { alert('Required fields!! Name and tel and email and adress') }
}

       render() { 


        return ( 

       
           <form >
        <h2>
          ADD parent
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
        <input type="BIRTHDATE" onChange={this.setTel}  />
        <br/>
        <span className="subtitle"> EMAIL:</span>
        <br/>
        <input type="text" onChange={this.setSex}  />
        <br/>
        <span className="subtitle">ADRESS:</span>
        <br/>
        <input type="text" onChange={this.setGroupName}  />
        <br/>
   
        <br/>
       
  
        <br/>
  
             
        <Link to="/parentList"> <span onClick={this.addParent} >Submit</span> </Link> 
  

     </form>    


 

      
      );
    }
}
 
export default ParentAdd ;