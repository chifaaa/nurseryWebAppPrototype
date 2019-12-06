import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom';
class BabyAdd extends Component {
  constructor(props){
    super(props)
    this.state=({
        firstName:'',
        lasttName:'',
      birthdate:'',
      sex:'',
      groupName:'',
     
    })
  }


  setName=e=> { 

    this.setState({
    firstName:e.target.value
    
  })}
  setLastname=e=> {  this.setState({
    lastName:e.target.value
    
  })}

  setBirthdate=e=> {  this.setState({
    birthdate:e.target.value
    
  })}
  setSex=e=> {  this.setState({
    sex:e.target.value
    
  })}
  setGroupName=e=> {  this.setState({
    groupName:e.target.value
    
  })}

  addBaby = () => {
    if (this.state.firstName !== '' && (this.state.lastName !== '' || this.state.birthdate !== ''|| this.state.sex !== ''||this.state.groupName !== '')) {
    axios.post("http://localhost:3000/baby/create",{
     firstName:this.state.firstName,lastName:this.state.lastName,birthdate:this.state.birthdate,sex:this.state.sex,groupName:this.state.groupName
    })
 
  }

else { alert('Required fields!! Name and tel and email and birthdate') }
}

       render() { 


        return ( 

       
           <form >
        <h2>
          ADD baby
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
        <span className="subtitle">BIRTHDATE:</span>
        <br/>
        <input type="BIRTHDATE" onChange={this.setBirthdate}  />
        <br/>
        <span className="subtitle"> SEX:</span>
        <br/>
        <input type="text" onChange={this.setSex}  />
        <br/>
        <span className="subtitle">GROUPNAME:</span>
        <br/>
        <input type="text" onChange={this.setGroupName}  />
        <br/>
   
        <br/>
       
  
        <br/>
  
             
        <Link to="/inscription/BabyList"> <span onClick={this.addBaby} >Submit</span> </Link> 
  

     </form>    


 

      
      );
    }
}
 
export default BabyAdd ;