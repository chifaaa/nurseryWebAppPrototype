import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
class ModifyMeal extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      id: '',
      day: '',
      mainMeal: '',
      dessert: '',
      snack: '',

    })
  }


  componentDidMount() {
    this.setState({
      id: this.props.match.params.id,
      day: this.props.match.params.day,
      mainMeal: this.props.match.params.mainMeal,
      dessert: this.props.match.params.dessert,
      snack: this.props.match.params.snack,


    })


  }



  modifyMeal = () => {
    let x = {
        day: this.state.day,
        mainMeal: this.state.mainMeal,
        dessert: this.state.dessert,
        snack: this.state.snack,

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
                {/* <h4 className="card-title">{this.state.name}</h4> */}

                <div>
                  <div> <label >Day :</label>
                    <input value={this.state.day} type="text" onChange={(e) => { this.setState({ day: e.target.value }) }} />
                  </div>



                  <div> <label>Main Meal :</label>
                    <input value={this.state.mainMeal} type="text" onChange={(e) => { this.setState({ mainMeal: e.target.value }) }} />
                  </div>


                  <div> <label>Dessert:</label>
                    <input value={this.state.dessert} type="text" onChange={(e) => { this.setState({ dessert: e.target.value }) }} />
                  </div>
       
                  <div> <label>Snack:</label>
                    <input value={this.state.snack} type="text" onChange={(e) => { this.setState({ snack: e.target.value }) }} />
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