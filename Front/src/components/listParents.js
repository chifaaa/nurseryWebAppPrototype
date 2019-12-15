import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class ParentList extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      parents: [],



    })
  }
  componentDidMount() {
    axios.get("http://localhost:3000/parents")
      .then(res => {
        this.setState({ parents: res.data })
      })
  }


  delete = (id) => {

    axios.delete("http://localhost:3000/parent/delete/" + id)

    window.location.reload();

  }




  render() {
    return (

      <section id="team" className="pb-5">
      <div className="container">
          <h5 className="section-title h1">Parent's List'</h5>
          <div className="row">
              {this.state.parents.map((el, i) => {
                  const defaultImgUrl = el.sex == "male" ? "https://sophieriehl.com/wp-content/uploads/2017/06/male.png" : "http://www.victoire-avocats.eu/wp-content/uploads/2018/12/circled_user_female1600.png"

                  return (
                      <div className="col-xs-12 col-sm-6 col-md-4">
                          <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div className="mainflip">
                                  <div className="frontside">
                                      <div className="card">
                                          <div className="card-body text-center">
                                              <p><img className=" img-fluid" src={defaultImgUrl} alt="card image" /></p>
                                              <h4 className="card-title">{el.firstName} {el.lastName}</h4>
                                              <p className="card-text"><strong>{el.firstName}'s email:</strong> {el.email}.</p>
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
                                              
                                              <p className="card-text"><strong>Sex:</strong> {el.sex}</p>
                                              <p className="card-text"><strong>Adress:</strong> {el.adress}</p>
                                              <p className="card-text"><strong>Tel:</strong> {el.tel}</p>
                                              <p className="card-text"><strong>Email:</strong> {el.email}</p>
                                                  {el.babies.map(baby => {
                                              return (<p className="card-text"><strong>Baby Name:</strong> {baby.firstName} {baby.lastName}</p>)
                                              })}
                                              <ul className="list-inline">
                                              </ul>
                                          </div>
                                          <div className= "center_button">
                                              <a href="#" class="btn btn-primary  btn-delete"> <i class="fas fa-trash" > <span onClick={() => { this.delete(el._id) }} >Delete</span></i></a>
                                              <Link class="btn btn-primary" to={`/modifyparent/${el._id}/${el.firstName}/${el.lastName}/${el.tel}/${el.email}/${el.adress}/${el.sex}`}><i class="fas fa-edit"> Edit</i></Link>

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
















export default ParentList;
