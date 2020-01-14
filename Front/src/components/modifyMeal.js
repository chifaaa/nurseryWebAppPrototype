import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
class ModifyMeal extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      id: '',
      day: '',
      description: '',
      
    })
  }


  componentDidMount() {
    this.setState({
      id: this.props.match.params.id,
      day: this.props.match.params.day,
      description: this.props.match.params.description,
     


    })


  }



  modifyMeal = () => {
    let x = {
        day: this.state.day,
        description: this.state.description,
        
    }
    axios.put("http://localhost:3000/meal/update/" + this.state.id, x)


  }




  render() {
    return (

      <section id="team" className="pb-5">

        <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="edit">
          <div className="frontside">
            <div className="card" style={{height:'fit-content'}}>

              <div className="card-body">
                <h4 className="card-title">{this.state.day}</h4>

                <div>
                  <div> <label >Day :</label>

                    <input value={this.state.day} type="text" onChange={(e) => { this.setState({ day: e.target.value }) }} />


                  </div>



                  <div> <label>Description :</label>

                    <input value={this.state.description} type="text" onChange={(e) => { this.setState({ description: e.target.value }) }} />

                  </div>
                  
                  
                </div>
                <div className="center_button">
                <Link  class="btn btn-primary" to="/mealsPage" onClick={this.modifyMeal}><i class="fas fa-save"> Save</i></Link>
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

export default ModifyMeal;