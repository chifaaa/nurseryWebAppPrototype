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
                            const defaultImgUrl = el.sex == "male" ? "data:image/jpeg;base64,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" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXtQEkz64qQoKtU2q8-OncogulSSRwk04G6MIJERWFXRyn5IA&s"

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
                                                        {/* <Link  class="btn btn-primary" to={`/eventsPage/EventNew/${el._id}`}><i class="fas fa-edit"> Add Event</i></Link> */}

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
