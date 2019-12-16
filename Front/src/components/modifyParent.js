import React, { Component } from 'react';
import {Link } from 'react-router-dom';
 
import axios from 'axios'
class ModifyParent extends Component {
    constructor(props){
        super(props)
        this.state=({
          id:'',
         firstName:'',
         lastName:'',
         tel:'',
         email:'',
         adress:'', 
         sex:''    
        })
          }


 componentDidMount() { 
  this.setState({
    id:this.props.match.params._id,
    firstName:this.props.match.params.firstName,
lastName:this.props.match.params.lastName,
email:this.props.match.params.email,
adress:this.props.match.params.adress,
tel:this.props.match.params.tel,
 sex:this.props.match.params.sex
   })

 
          }
          


  modifyParent=()=>{
    let x={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      tel:this.state.tel,
      sex:this.state.sex,
      email:this.state.email,
      adress:this.state.adress,
      sex:this.state.sex
    }
    axios.put("http://localhost:3000/parent/update/"+this.state.id,x)
   
    
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


            <div> <label>Sex:</label>
              <input value={this.state.sex} type="text" onChange={(e) => { this.setState({ sex: e.target.value }) }} />
            </div>

            <div> <label>Email: </label>
              <input value={this.state.email} type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} />
            </div>

            <div> <label>Adress: </label>
              <input value={this.state.adress} type="text" onChange={(e) => { this.setState({ adress: e.target.value }) }} />
            </div>
            
            
          </div>
          <div className="center_button">
          <Link  class="btn btn-primary" to="/inscription/ParentList" onClick={this.modifyParent}><i class="fas fa-save"> Save</i></Link>
          <Link  class="btn btn-primary" to={`/inscription/BabyNew/${this.state.id}`}><i class="fas fa-plus">Add Baby</i></Link>
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











export default ModifyParent;