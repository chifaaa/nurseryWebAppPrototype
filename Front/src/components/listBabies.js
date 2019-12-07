import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class BabyList extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      babies: [],



    })
  }
  componentDidMount() {
    axios.get("http://localhost:3000/babies")
      .then(res => {
        this.setState({ babies: res.data })
      })
  }


  delete = (id) => {

    axios.delete("http://localhost:3000/baby/delete/" + id)

    window.location.reload();

  }




  render() {
    return (


<section id="team" className="pb-5">
    <div className="container">
        <h5 className="section-title h1">OUR TEAM</h5>
        <div className="row">
                  {this.state.babies.map((el, i) => {
          const defaultImgUrl = el.sex == "male"? "https://previews.123rf.com/images/jemastock/jemastock1610/jemastock161000599/63393641-b%C3%A9b%C3%A9-dessin-anim%C3%A9-gar%C3%A7on-b%C3%A9b%C3%A9-douche-et-le-th%C3%A8me-de-l-enfance-conception-isol%C3%A9-et-color%C3%A9-vector-illustration.jpg" : "https://i.pinimg.com/originals/8d/d6/07/8dd607efa2bf07e77d6664be550a8e5b.jpg"
    
          return (
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={defaultImgUrl} alt="card image"/></p>
                                    <h4 className="card-title">{el.firstName} {el.lastName}</h4>
                                    <p className="card-text">this lovely baby belongs to the group <strong>{el.groupName}</strong>.</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">{el.firstName} {el.lastName}</h4>
              <p className="card-text"><strong>Birthdate:</strong> {el.birthdate}</p>
              <p className="card-text"><strong>Sex:</strong> {el.sex}</p>
              <p className="card-text"><strong>Group:</strong> {el.groupName}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
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

export default BabyList;
