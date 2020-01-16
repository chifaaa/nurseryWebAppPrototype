import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom';
class AddMeal extends Component {
  constructor(props){
    super(props)
    this.state=({
        day:'',
        lunch:'',
        dessert:'',
        snack:'',
  

    })
  }


  setDay=e=> {  this.setState({
    day:e.target.value
  })}

  setLunch=e=> {  
    this.setState({
    lunch:e.target.value
  })}
  
  setDessert=e=> {  
    this.setState({
    dessert:e.target.value
  })}

  setSnack=e=> {  
    this.setState({
    snack:e.target.value
  })}

 

  addMeal = () => {
    if (this.state.day !== '' && this.state.lunch !== '' && this.state.dessert !== '' && this.state.snack !== '') {
    axios.post("http://localhost:3000/meal/create",{
        day:this.state.day,lunch:this.state.lunch,dessert:this.state.dessert,snack:this.state.snack,
    })
 
  }

else { alert('Required fields!!  Day and lunch') }
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
                      <input  type="date" onChange={this.setDay}  />
                    </div>
          
          
          
                    <div> <label>Lunch :</label>
                      <input onChange={this.setLunch} type="text" />
                    </div>
          
                    <div> <label>Dessert :</label>
                      <input onChange={this.setDessert} type="text" />
                    </div>
                  
                    <div> <label>Snack :</label>
                      <input onChange={this.setSnack} type="text" />
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