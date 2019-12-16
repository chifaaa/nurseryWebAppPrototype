import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class GroupsList extends Component {
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
          <h5 className="section-title h1">Group's List'</h5>
          <div className="row">
              {this.state.groups.map((el, i) => {
                //   const defaultImgUrl = el.sex == "male" ? "https://sophieriehl.com/wp-content/uploads/2017/06/male.png" : "http://www.victoire-avocats.eu/wp-content/uploads/2018/12/circled_user_female1600.png"

                  return (
                      <div className="col-xs-12 col-sm-6 col-md-4">
                          <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div className="mainflip">
                                  <div className="frontside">
                                      <div className="card">
                                          <div className="card-body text-center">
                                              {/* <p><img className=" img-fluid" src={defaultImgUrl} alt="card image" /></p> */}
                                              <h2 className="card-title">{el.name}</h2>
                                             
                                          </div>
                                          <div className= "center_button">
                                              <a href="#" className="btn btn-primary"><i className="fas fa-eye">View</i></a>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="backside">
                                      <div className="card">
                                          <div className="card-body text-center mt-4">
                                              <h4 className="card-title">{el.name}</h4>
                                              {/* <div>{el.babiesList.map((baby) => {return(<h5 className="card-title"> {baby.firstName}</h5>)})}</div> */}


                                              <ul className="list-inline">
                                              </ul>
                                          </div>
                                          <div className= "center_button">
                                              <a href="#" class="btn btn-primary  btn-delete"> <i class="fas fa-trash" > <span onClick={() => { this.delete(el._id) }} >Delete</span></i></a>
                                              <Link class="btn btn-primary" to={`/modifyGroup/${el._id}/${el.name}`}><i class="fas fa-edit"> Edit</i></Link>

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
















export default GroupsList;
