import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class AssistantList extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      assistants: [],


    })
  }
  componentDidMount() {
    axios.get("http://localhost:3000/assistants")
      .then(res => {
        this.setState({ assistants: res.data })
      })
  }

  delete = (id) => {

    axios.delete("http://localhost:3000/assistant/delete/" + id)

    window.location.reload();

  }



  render() {
    return (

<section id="team" className="pb-5">
      <div className="container">
          <h5 className="section-title h1">Maternal Assistant's List</h5>
          <div className="row">
              {this.state.assistants.map((el, i) => {
                

                  return (
                      <div className="col-xs-12 col-sm-6 col-md-4">
                          <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div className="mainflip">
                                  <div className="frontside">
                                      <div className="card">
                                          <div className="card-body text-center">
                                              <p><img className=" img-fluid" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1024px-Crystal_Clear_kdm_user_female.svg.png'} alt="card image" /></p>
                                              <h4 className="card-title">{el.firstName} {el.lastName}</h4>
                                              
                                              <p className="card-text"><strong> is responsible for group :</strong> {el.groupName}</p>
                                          </div>
                                          <div className= "center_button">
                                              <a href="#" className="btn btn-primary"><i className="fas fa-eye">View</i></a>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="backside">
                                      <div className="card">
                                          <div className="card-body text-center mt-4">
                                              <h4 className="card-title">{el.firstName} {el.lastName}</h4>
                                              
                                              {/* <p className="card-text"><strong>Sex:</strong> {el.sex}</p> */}
                                              <p className="card-text"><strong>Adress:</strong> {el.adress}</p>
                                              <p className="card-text"><strong>Tel:</strong> {el.tel}</p>
                                              <p className="card-text"><strong>Email:</strong> {el.email}</p>
                                              <p className="card-text"><strong>Group Name:</strong> {el.groupName}</p>
                                                  
                                              <ul className="list-inline">
                                              </ul>
                                          </div>
                                          <div className= "center_button">
                                              <a href="#" class="btn btn-primary  btn-delete"> <i class="fas fa-trash" > <span onClick={() => { this.delete(el._id) }} >Delete</span></i></a>
                                              <Link class="btn btn-primary" to={`/modifyAssistant/${el._id}/${el.firstName}/${el.lastName}/${el.tel}/${el.email}/${el.adress}/${el.groupName}`}><i class="fas fa-edit"> Edit</i></Link>

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























      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      

export default AssistantList;
