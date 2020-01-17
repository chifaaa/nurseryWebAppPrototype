import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class GroupAdd extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      groupName: '',


    })
  }


  setGroupName = e => {

    this.setState({
      groupName: e.target.value

    })
  }
  

  addGroup = () => {
    if (this.state.groupName !== '') {
      axios.post("http://localhost:3000/create/group", {
        groupName: this.state.groupName
      })

    }

    else { alert('Required fields!! groupName') }
  }

  render() {


    return (


     

        <section id="team" className="pb-5">

<div className="col-xs-12 col-sm-6 col-md-4">
<div className="edit">
  <div className="frontside" style={{marginLeft:'540px'}}>
    <div className="card" style={{height:'fit-content'}}>

      <div className="card-body">
        <h4 className="card-title"> Add group</h4>

        <div>
          <div> <label >The group's name :</label>

            <input onChange={this.setGroupName} />


          </div>
          
          
        </div>
        <div className="center_button">
        <Link  class="btn btn-primary" to="/groupsPage" onClick={this.addGroup}><i class="fas fa-save"> Save</i></Link>
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












export default GroupAdd;