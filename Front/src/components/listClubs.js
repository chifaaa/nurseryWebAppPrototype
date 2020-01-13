import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class ClubsList extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            clubs: [],



        })
    }
    componentDidMount() {
        axios.get("http://localhost:3000/clubs")
            .then(res => {
                this.setState({ clubs: res.data })
            })
    }


    delete = (id) => {

        axios.delete("http://localhost:3000/club/delete/" + id)

        window.location.reload();

    }




    render() {
        return (


            <section id="team" className="pb-5">
                <div className="container">
                    <h5 className="section-title h1">OUR CLUBS</h5>
                    <div className="row">
                        {this.state.clubs.map((el, i) => {

                            return (
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <h4 className="card-title">{el.name}</h4>
                                                        <p className="card-text"><strong>Welcome to </strong>{el.name}</p>
                                                        <p className="card-text"><strong>Description:</strong> {el.description}</p>
                                                        <p className="card-text"><strong>Day:</strong> {el.day}</p>
                                                        <ul className="list-inline">
                                                        </ul>
                                                    <div className= "center_button">
                                                        <a href="#" class="btn btn-primary  btn-delete"> <i class="fas fa-trash" > <span onClick={() => { this.delete(el._id) }} >Delete</span></i></a>
                                                        <Link class="btn btn-primary" to={`/modifyclub/${el._id}/${el.name}/${el.description}/${el.day}`}><i class="fas fa-edit"> Edit</i></Link>

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

export default ClubsList;
