import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class GroupList extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      groups: [],



    })
  }
  componentDidMount() {
    axios.get("http://localhost:3000/groups")
      .then(res => {
        this.setState({ groups: res.data })
      })
  }


  delete = (id) => {

    axios.delete("http://localhost:3000/group/delete/" + id)

    window.location.reload();

  }




  render() {
    return (

      <section id="team" className="pb-5">
      <div className="container">
          <h5 className="section-title h1">Groups' List'</h5>
          <div className="row">
              {this.state.groups.map((el, i) => {
                  const cardBackgroundColor = (el.groupName == "Butterflies") ? 'rgb(209, 236, 253)' : (el.groupName == "Little Birds") ? 'rgb(255, 252, 207)' : 'rgb(247, 203, 221)';

                  return (
                      <div className="col-xs-12 col-sm-6 col-md-4">
                          <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div className="mainflip">
                                  <div className="frontside" >
                                      <div className="card" style={{backgroundColor:`${cardBackgroundColor}`}}>
                                          <div className="card-body text-center">
                                              <h3 className="card-title">{el.groupName}</h3>
                                              <strong> Assistants:</strong> 
                                              <br/>
                                              <br/>
                                              {el.assistants.map(assistant => {
                                              return (<p className="card-text">{assistant.firstName} {assistant.lastName}</p>)
                                              })}
                                          </div>
                                          <div className= "center_button">
                                              <a href="#" className="btn btn-primary"><i className="fas fa-eye">View</i></a>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="backside" style={{height:'fit-content'}}>
                                      <div className="card" style={{height:'fit-content',backgroundColor:`${cardBackgroundColor}`}}>
                                          <div className="card-body text-center mt-4">
                                              <h4 className="card-title">{el.groupName}</h4>
                                              <strong>Babies' Names:</strong>
                                              <br/>
                                              <br/>
                                              {el.babies.map(baby => {
                                              return (<p className="card-text"> {baby.firstName} {baby.lastName}</p>)
                                              })}
                                            
                                              <ul className="list-inline">
                                              </ul>
                                          </div>
                                          <div className= "center_button">
                                              <a href="#" class="btn btn-primary  btn-delete"> <i class="fas fa-trash" > <span onClick={() => { this.delete(el._id) }} >Delete</span></i></a>
                                              <Link class="btn btn-primary" to={`/modifygroup/${el._id}/${el.groupName}`}><i class="fas fa-edit"> Edit</i></Link>

                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )
              })}

          </div>
      </div>
  </section>





);
}
}
















export default GroupList;
