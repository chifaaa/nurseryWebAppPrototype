import React, { Component } from 'react';
import {Link } from 'react-router-dom';
 
import axios from 'axios'
class ModifyGroup extends Component {
    constructor(props){
        super(props)
        this.state=({
          id:'',
         groupName:''    
        })
          }


 componentDidMount() { 
  this.setState({
    id:this.props.match.params.id,
    groupName:this.props.match.params.groupName,

 
   })

 
          }
          


  modifyGroup=()=>{

    axios.put("http://localhost:3000/group/update/"+this.state.id,this.state.groupName)
  
    
  }




    render() { 
      
       

return (
    
  <section id="team" className="pb-5">

  <div className="col-xs-12 col-sm-6 col-md-4">
  <div className="edit">
    <div className="frontside">
      <div className="card">

        <div className="card-body">
          <h4 className="card-title">{this.state.groupName}</h4>

          <div>
            <div> <label >Group's name :</label>

              <input value={this.state.groupName} type="text" onChange={(e) => { this.setState({ groupName: e.target.value }) }} />


            </div>



        
            
          </div>
          <div className="center_button">
          <Link  class="btn btn-primary" to="/inscription/GroupsList" onClick={this.modifyGroup}><i class="fas fa-save"> Save</i></Link>
          {/* <Link  class="btn btn-primary" to={`/inscription/BabyNew/${this.state.id}`}><i class="fas fa-plus">Add Baby</i></Link> */}
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











export default ModifyGroup;