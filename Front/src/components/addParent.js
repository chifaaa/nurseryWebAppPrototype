import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class ParentAdd extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      firstName: '',
      lasttName: '',
      tel: '',
      email: '',
      adress: '',

    })
  }


  setfirstName = e => {

    this.setState({
      firstName: e.target.value

    })
  }
  setLastname = e => {
    this.setState({
      lastName: e.target.value

    })
  }

  setTel = e => {
    this.setState({
      tel: e.target.value

    })
  }
  setEmail = e => {
    this.setState({
      email: e.target.value

    })
  }
  setAdress = e => {
    this.setState({
      adress: e.target.value

    })
  }
  setSex = e => {
    this.setState({
      sex: e.target.value

    })
  }

  addParent = () => {
    if (this.state.firstName !== '' && (this.state.lastName !== '' || this.state.tel !== '' || this.state.adress !== '' || this.state.email !== '')) {
      axios.post("http://localhost:3000/parent/create", {
        firstName: this.state.firstName, lastName: this.state.lastName, tel: this.state.tel, email: this.state.email, adress: this.state.adress,sex: this.state.sex
      })

    }

    else { alert('Required fields!! Name and tel and email and adress') }
  }

  render() {


    return (


     

        <section id="team" className="pb-5">

<div className="col-xs-12 col-sm-6 col-md-4">
<div className="edit">
  <div className="frontside">
    <div className="card">

      <div className="card-body">
        <h4 className="card-title"> Add parent</h4>

        <div>
          <div> <label >First name :</label>

            <input onChange={this.setfirstName} />


          </div>



          <div> <label>Last name :</label>

            <input onChange={this.setLastname} type="text" />

          </div>


          <div> <label>Sex:</label>
            <input onChange={this.setSex} type="text" />
          </div>

          <div> <label>Tel:</label>
            <input onChange={this.setTel} type="text" />
          </div>

          <div> <label>Email: </label>
            <input onChange={this.setEmail} type="text"  />
          </div>

          <div> <label>Adress: </label>
            <input onChange={this.setAdress} type="text" />
          </div>
          
          
        </div>
        <div className="center_button">
        <Link  class="btn btn-primary" to="/inscription/ParentsList" onClick={this.addParent}><i class="fas fa-save"> Save</i></Link>
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












export default ParentAdd;