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


            // <section id="team" className="pb-5">
                <section>
                {/* <div className="container"> */}
                <div >
                    <h5 className="section-title h1">OUR MEALS</h5>
                    {/* <div className="row"> */}
                    <div >
                        {this.state.meals.map((el, i) => {

                            return (
                                // <div className="col-xs-12 col-sm-6 col-md-4">
                                     <div >
                                            {/* <div className="frontside"> */}
                                            <div>
                                                {/* <div className="card"> */}
                                                <div>
                                                    {/* <div className="card-body text-center"> */}
                                                        <div>
                                                        <h4 className="card-titlee">{el.day.substring(0, 10)}</h4>
                                                        {/* <p className="card-text"><strong>Welcome to </strong>{el.day.substring(0, 10)}</p> */}
                                                        <div className="meal-container">
                                                        {/* <p className="card-text"><strong>Description: This meal contains </strong> </p> */}
                                                          <div className="meal-blocc">
                                                         <div className="meal-bl"> <p className="card-text"> <strong> LUNCH :</strong> </p></div>
                                                         <div className="meal-bl"> <p className="card-text"> <strong> DESSERT :</strong></p></div>
                                                         <div className="meal-bl"> <p className="card-text"> <strong> SNACK :</strong></p></div>
                                                          </div>
                                                          <div className="meal-bloc">
                                                          <div className="meal-bl">   <p className="card-text"><strong>{el.lunch}</strong></p></div>
                                                          <div className="meal-bl">  <p className="card-text"><strong>{el.dessert}</strong></p></div>
                                                          <div className="meal-bl">  <p className="card-text"><strong>{el.snack}</strong></p></div>
                                                          </div>

                                                        </div>

                                                        <ul className="list-inline">
                                                        </ul>
                                                    <div className= "center_button">
                                                        <a href="#" class="btn btn-primary  btn-delete"> <i class="fas fa-trash" > <span onClick={() => { this.delete(el._id) }} >Delete</span></i></a>
                                                        <Link class="btn btn-primary" to={`/modifymeal/${el._id}/${el.day}/${el.lunch}/${el.dessert}/${el.snack}`}><i class="fas fa-edit"> Edit</i></Link>

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
