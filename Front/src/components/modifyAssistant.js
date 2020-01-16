import React, { Component } from 'react';
import {Link } from 'react-router-dom';
 
import axios from 'axios'
class ModifyAssistant extends Component {
    constructor(props){
        super(props)
        this.state=({
          id:'',
         firstName:'',
         lastName:'',
         tel:'',
         email:'',
         adress:'', 
         groupName:''    
        })
          }

 componentDidMount() { 
  this.setState({
    id:this.props.match.params.id,
    firstName:this.props.match.params.firstName,
lastName:this.props.match.params.lastName,
email:this.props.match.params.email,
adress:this.props.match.params.adress,
tel:this.props.match.params.tel,
groupName:this.props.match.params.groupName,
 
   })

 
          }
          

  modifyAssistant=()=>{
    let x={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      tel:this.state.tel,
      email:this.state.email,
      adress:this.state.adress,
      groupName:this.state.groupName,
    }
    axios.put("http://localhost:3000/assistant/update/"+this.state.id,x)
   
    
  }



    render() { 
      
       

return (

<section id="team" className="pb-5">

<div className="col-xs-12 col-sm-6 col-md-4">
<div className="edit">
  <div className="frontside" style={{marginLeft:'540px'}}>
    <div className="card" style={{height:'fit-content'}}>

      <div className="card-body">
        <h4 className="card-title">{this.state.firstName} {this.state.lastName}</h4>

        <div>
          <div> <label >First name :</label>

            <input value={this.state.firstName} type="text" onChange={(e) => { this.setState({ firstName: e.target.value }) }} />


          </div>



          <div> <label>Last name :</label>

            <input value={this.state.lastName} type="text" onChange={(e) => { this.setState({ lastName: e.target.value }) }} />

          </div>


         

          <div> <label>Email: </label>
            <input value={this.state.email} type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} />
          </div>

          <div> <label>Adress: </label>
            <input value={this.state.adress} type="text" onChange={(e) => { this.setState({ adress: e.target.value }) }} />
          </div>

          <div> <label>Tel: </label>
            <input value={this.state.tel} type="text" onChange={(e) => { this.setState({ tel: e.target.value }) }} />
          </div>

          <div> <label>Group: </label>
            <input value={this.state.groupName} type="text" onChange={(e) => { this.setState({ groupName: e.target.value }) }} />
          </div>
          
          
        </div>
        <div className="center_button">
        <Link  class="btn btn-primary" to="/assistantsPage/AssistantsList" onClick={this.modifyAssistant}><i class="fas fa-save"> Save</i></Link>
       
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
 
export default ModifyAssistant;
