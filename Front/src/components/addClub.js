import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom';
class AddClub extends Component {
  constructor(props){
    super(props)
    this.state=({
    name:'',
    description:'',
    day:'',

    })
  }


  setName=e=> { 
    this.setState({
    name:e.target.value
  })}

  setDescription=e=> {  
    this.setState({
    description:e.target.value
  })}

  setDay=e=> {  this.setState({
    day:e.target.value
  })}


  addClub = () => {
    if (this.state.name !== '' && this.state.day !== '') {
    axios.post("http://localhost:3000/club/create",{
     name:this.state.name,description:this.state.description,day:this.state.day
    })
 
  }

else { alert('Required fields!! Name and Day') }
}

       render() { 


        return ( 

       
          <section id="team" className="pb-5">

          <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="edit">
            <div className="frontside">
              <div className="card" style={{height:'fit-content'}}>
          
                <div className="card-body">
                  <h4 className="card-title"> Add a Club</h4>
          
                  <div>
                    <div> <label >Name :</label>
                      <input onChange={this.setName} />
                    </div>
          
          
          
                    <div> <label>Description :</label>
                      <input onChange={this.setDescription} type="text" />
                    </div>
          
          
                    <div> <label>Day:</label>
                      <input onChange={this.setDay} type="text" />
                    </div>
          
                 
                    
                    
                  </div>
                  <div className="center_button">
                  <Link  class="btn btn-primary" to="/clubsPage" onClick={this.addClub}><i class="fas fa-save"> Save</i></Link>
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
export default AddClub ;