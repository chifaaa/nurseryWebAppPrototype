import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom';
class AddEvent extends Component {
  constructor(props){
    super(props)
    this.state=({
    startTime:'',
    duration:'',
    type:'',
    description:'',

    })
  }


  setStartTime=e=> { 
    this.setState({
        startTime:e.target.value
  })}

  setDuration=e=> {  
    this.setState({
        duration:e.target.value
  })}

  setType=e=> {  
    this.setState({
    type:e.target.value
  })}

  setDescription=e=> {  
    this.setState({
    description:e.target.value
  })}

  addEvent = () => {
    if (this.state.startTime !== '' && this.state.duration !== '' && this.state.type !== '' && this.state.description !== '') {
    axios.post("http://localhost:3000/event/create",{
        startTime:this.state.startTime,duration:this.state.duration,type:this.state.type,description:this.state.description,babyId:this.props.match.params.babyId
    })
 
  }

else { alert('Required fields!! startTime, duration, type and description') }
}

       render() { 


        return ( 

       
          <section id="team" className="pb-5">

          <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="edit">
            <div className="frontside">
              <div className="card" style={{height:'fit-content'}}>
          
                <div className="card-body">
                  <h4 className="card-title"> Add an event</h4>
          
                  <div>
                    <div> <label >Start Time :</label>
                      <input onChange={this.setStartTime} />
                    </div>
          
          
          
                    <div> <label>Duration :</label>
                      <input onChange={this.setDuration} type="text" />
                    </div>
          
          
                    <div> <label>Type:</label>
                      <input onChange={this.setType} type="text" />
                    </div>
          
                 
                    <div> <label>Description:</label>
                      <input onChange={this.setDescription} type="text" />
                    </div>  
                    
                  </div>
                  <div className="center_button">
                  <Link  class="btn btn-primary" to="/eventsPage" onClick={this.addEvent}><i class="fas fa-save"> Save</i></Link>
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
export default AddEvent ;