import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
class ModifyBaby extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      id: '',
      firstName: '',
      lastName: '',
      birthdate: '',
      sex: '',
      groupName: '',
    })
  }


  componentDidMount() {
    this.setState({
      id: this.props.match.params.id,
      firstName: this.props.match.params.firstName,
      lastName: this.props.match.params.lastName,
      birthdate: this.props.match.params.birthdate,
      sex: this.props.match.params.sex,
      groupName: this.props.match.params.groupName,

    })


  }



  modifyBaby = () => {
    let x = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthdate: this.state.birthdate,
      sex: this.state.sex,
      groupName: this.state.groupName
    }
    axios.put("http://localhost:3000/baby/update/" + this.state.id, x)


  }




  render() {
    return (

      <section id="team" className="pb-5">

        <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="edit">
          <div className="frontside">
            <div className="card">

              <div className="card-body">
                <h4 className="card-title">{this.state.firstName} {this.state.lastName}</h4>

                <div>
                  <div> <label >First name :</label>

                    <input value={this.state.firstName} type="text" onChange={(e) => { this.setState({ firstName: e.target.value }) }} />


                  </div>



                  <div> <label>Last name :</label>

                    <input value={this.state.lastName} type="text" onChange={(e) => { this.setState({ lastName: e.target.value }) }} />

                  </div>


                  <div> <label>Birthdate:</label>
                    <input value={this.state.birthdate} type="text" onChange={(e) => { this.setState({ birthdate: e.target.value }) }} />
                  </div>

                  <div> <label>Sex: </label>
                    <input value={this.state.sex} type="text" onChange={(e) => { this.setState({ sex: e.target.value }) }} />
                  </div>

                  <div> <label>Group: </label>
                    <input value={this.state.groupName} type="text" onChange={(e) => { this.setState({ groupName: e.target.value }) }} />
                  </div>
                  
                  
                </div>
                <div className="center_button">
                <Link  class="btn btn-primary" to="/BabyList" onClick={this.modifyBaby}><i class="fas fa-save"> Save</i></Link>
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

export default ModifyBaby;