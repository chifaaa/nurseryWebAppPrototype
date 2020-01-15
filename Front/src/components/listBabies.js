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
                    <h5 className="section-title h1">OUR BABIES</h5>
                    <div className="row">
                        {this.state.babies.map((el, i) => {
                            const defaultImgUrl = el.sex == "male" ? "https://previews.123rf.com/images/jemastock/jemastock1610/jemastock161000599/63393641-b%C3%A9b%C3%A9-dessin-anim%C3%A9-gar%C3%A7on-b%C3%A9b%C3%A9-douche-et-le-th%C3%A8me-de-l-enfance-conception-isol%C3%A9-et-color%C3%A9-vector-illustration.jpg" : "https://i.pinimg.com/originals/8d/d6/07/8dd607efa2bf07e77d6664be550a8e5b.jpg"

                            return (
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src={defaultImgUrl} alt="card image" /></p>
                                                        <h4 className="card-title">{el.firstName} {el.lastName}</h4>
                                                        <p className="card-text">this lovely baby belongs to the group <strong>{el.groupName}</strong>.</p>
                                                    </div>
                                                    <div className= "center_button">
                                                        <a href="#" className="btn btn-primary"><i className="fas fa-eye">View</i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">

                                                       {/* <Link to="/eventsPage"><h4 className="card-title">{el.firstName} {el.lastName}</h4> </Link> */}
                                                       <Link to={`/eventsPage/${el._id}`}><h4 className="card-title">{el.firstName} {el.lastName}</h4> </Link>

                                                        <p className="card-text"><strong>Birthdate:</strong> {el.birthdate.substring(0, 10)}</p>
                                                        <p className="card-text"><strong>Sex:</strong> {el.sex}</p>
                                                        <p className="card-text"><strong>Group:</strong> {el.groupName}</p>
                                                        {/* <p className="card-text"><strong>Parent:</strong> {el.parent.lastName}</p> */}

                                                        <ul className="list-inline">
                                                        </ul>
                                                    </div>
                                                    <div className= "center_button">
                                                        <a href="#" class="btn btn-primary  btn-delete"> <i class="fas fa-trash" > <span onClick={() => { this.delete(el._id) }} >Delete</span></i></a>
                                                        <Link class="btn btn-primary" to={`/modifybaby/${el._id}/${el.firstName}/${el.lastName}/${el.birthdate.substring(0, 10)}/${el.sex}/${el.groupName}`}><i class="fas fa-edit"> Edit</i></Link>
                                                        <Link  class="btn btn-primary" to={`/eventsPage/EventNew/${el._id}`}><i class="fas fa-edit"> Add Event</i></Link>

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
