import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class MealsList extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            meals: [],



        })
    }
    componentDidMount() {
        axios.get("http://localhost:3000/meals")
            .then(res => {
                this.setState({ meals: res.data })
            })
    }


    delete = (id) => {

        axios.delete("http://localhost:3000/meal/delete/" + id)

        window.location.reload();

    }




    render() {
        return (


            <section id="team" className="pb-5">
                <div className="container">
                    <h5 className="section-title h1">OUR MEALS</h5>
                    <div className="row">
                        {this.state.meals.map((el, i) => {

                            return (
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <h4 className="card-title">{el.day}</h4>
                                                        <p className="card-text"><strong>Welcome to </strong>{el.day}</p>
                                                        <p className="card-text"><strong>Description:</strong> {el.description}</p>
                                    
                                                        <ul className="list-inline">
                                                        </ul>
                                                    <div className= "center_button">
                                                        <a href="#" class="btn btn-primary  btn-delete"> <i class="fas fa-trash" > <span onClick={() => { this.delete(el._id) }} >Delete</span></i></a>
                                                        <Link class="btn btn-primary" to={`/modifymeal/${el._id}/${el.day}/${el.description}`}><i class="fas fa-edit"> Edit</i></Link>

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

export default MealsList;
