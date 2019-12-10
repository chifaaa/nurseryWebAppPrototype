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
      groupName:''
    })
  }


  setFirstname=e=> { 

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
     firstName:this.state.firstName,lastName:this.state.lastName,birthdate:this.state.birthdate,sex:this.state.sex,groupName:this.state.groupName,parentId:this.props.match.params.parentId
    })
 
  }

else { alert('Required fields!! Name and tel and email and birthdate') }
}

       render() { 


        return ( 

       
          <section id="team" className="pb-5">

          <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="edit">
            <div className="frontside">
              <div className="card">
          
                <div className="card-body">
                  <h4 className="card-title"> Add Baby</h4>
          
                  <div>
                    <div> <label >First name :</label>
          
                      <input onChange={this.setFirstname} />
          
          
                    </div>
          
          
          
                    <div> <label>Last name :</label>
          
                      <input onChange={this.setLastname} type="text" />
          
                    </div>
          
          
                    <div> <label>Sex:</label>
                      <input onChange={this.setSex} type="text" />
                    </div>
          
                    <div> <label>Birthdate: </label>
                      <input onChange={this.setBirthdate} type="text"  />
                    </div>
          
                    <div> <label>Group: </label>
                      <input onChange={this.setGroupName} type="text" />
                    </div>
                    
                    
                  </div>
                  <div className="center_button">
                  <Link  class="btn btn-primary" to="/inscription/BabyList" onClick={this.addBaby}><i class="fas fa-save"> Save</i></Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
          
          
          
          )
          }
          };
          
          
          
          
          
          
          
          
          
          
          
 
export default BabyAdd ;