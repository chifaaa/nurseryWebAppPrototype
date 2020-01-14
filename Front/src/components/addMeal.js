import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom';
class AddMeal extends Component {
  constructor(props){
    super(props)
    this.state=({
        day:'',
        description:'',
  

    })
  }


  setDay=e=> {  this.setState({
    day:e.target.value
  })}

  setDescription=e=> {  
    this.setState({
    description:e.target.value
  })}

 

  addMeal = () => {
    if (this.state.day !== '' && this.state.description !== '') {
    axios.post("http://localhost:3000/meal/create",{
        day:this.state.day,description:this.state.description,
    })
 
  }

else { alert('Required fields!!  Day and Description') }
}

       render() { 


        return ( 

       
          <section id="team" className="pb-5">

          <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="edit">
            <div className="frontside">
              <div className="card" style={{height:'fit-content'}}>
          
                <div className="card-body">
                  <h4 className="card-title"> Add a Meal</h4>
          
                  <div>
                  <div> <label>Day:</label>
                      <input onChange={this.setDay} type="text" />
                    </div>
          
          
          
                    <div> <label>Description :</label>
                      <input onChange={this.setDescription} type="text" />
                    </div>
          
          
                   
                 
                    
                    
                  </div>
                  <div className="center_button">
                  <Link  class="btn btn-primary" to="/mealsPage" onClick={this.addMeal}><i class="fas fa-save"> Save</i></Link>
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
export default AddMeal ;