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
 
   })

 
          }
          


  modifyParent=()=>{
    let x={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      tel:this.state.tel,
      email:this.state.email,
      adress:this.state.adress
    }
    axios.put("http://localhost:3000/parent/update/"+this.state.id,x)
   
    
  }




    render() { 
      
       

return (
    
    
<div>
 
<div> <label> firstName :</label>

<input value={this.state.firstName} type="text"onChange={(e)=>{this.setState({firstName:e.target.value})}}/>


</div>



<div> <label>lastName :</label>

<input value={this.state.lastName} type="text"onChange={(e)=>{this.setState({lastName:e.target.value})}}/>

</div>


<div> <label>tel :</label>
<input value={this.state.tel} type="text" onChange={(e)=>{this.setState({tel:e.target.value})}}/>
</div>

<div> <label>email :</label>
<input value={this.state.email} type="text" onChange={(e)=>{this.setState({sex:e.target.value})}}/>
</div>

<div> <label>adress :</label>
<input value={this.state.adress} type="text" onChange={(e)=>{this.setState({adress:e.target.value})}}/>
</div>
<Link to="/inscription/ParentsList"> <p onClick={this.modifyParent}>Modifier</p>
</Link> 
<Link to={`/inscription/BabyNew/${this.state.id}`}><span>Add Baby</span></Link>
</div>
    
);


      
    }
}
 
export default ModifyParent;