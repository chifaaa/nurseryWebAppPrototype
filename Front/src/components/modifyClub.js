import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
class ModifyClub extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      id: '',
      name: '',
      description: '',
      day: '',
    })
  }


  componentDidMount() {
    this.setState({
      id: this.props.match.params.id,
      name: this.props.match.params.name,
      description: this.props.match.params.description,
      day: this.props.match.params.day,


    })


  }



  modifyClub = () => {
    let x = {
        name: this.state.name,
        description: this.state.description,
        day: this.state.day,
    }
    axios.put("http://localhost:3000/club/update/" + this.state.id, x)


  }




  render() {
    return (

      <section id="team" className="pb-5">

        <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="edit">
          <div className="frontside" style={{marginLeft:'540px'}}>
            <div className="card" style={{height:'fit-content'}}>

              <div className="card-body">
                <h4 className="card-title">{this.state.name}</h4>

                <div>
                  <div> <label >Name :</label>

                    <input value={this.state.name} type="text" onChange={(e) => { this.setState({ name: e.target.value }) }} />


                  </div>



                  <div> <label>Description :</label>

                    <input value={this.state.description} type="text" onChange={(e) => { this.setState({ description: e.target.value }) }} />

                  </div>


                  <div> <label>Day:</label>
                    <input value={this.state.day} type="text" onChange={(e) => { this.setState({ day: e.target.value }) }} />
                  </div>
                  
                  
                </div>
                <div className="center_button">
                <Link  class="btn btn-primary" to="/clubsPage" onClick={this.modifyClub}><i class="fas fa-save"> Save</i></Link>
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

export default ModifyClub;