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
                    <h5 className="section-title h1">TODAY'S MEAL</h5>
                    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        {this.state.meals.map((el, i) => {

                            return (
                                <div>
                                    <h4 className="section-title h1">{el.day.substring(0, 10)}</h4>
                                        <div style={{display:'flex'}}>
                                            <div className="frontside" style={{marginLeft:'5px'}}>
                                                <div className="card" style={{height:'120px'}}>
                                                    <div className="card-body text-center">
                                                        <p className="card-title"><strong>mainMeal: </strong></p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="frontside" style={{marginLeft:'5px'}}>
                                                <div className="card" style={{height:'120px',width:'600px'}}>
                                                    <div className="card-body text-center">
                                                        <p className="card-text">{el.mainMeal}</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        



                                        <div style={{display:'flex'}}>
                                            <div className="frontside" style={{marginLeft:'5px'}}>
                                                <div className="card" style={{height:'120px'}}>
                                                    <div className="card-body text-center">
                                                        <p className="card-title"><strong>dessert:</strong></p>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="frontside" style={{marginLeft:'5px'}}>
                                                <div className="card" style={{height:'120px',width:'600px'}}>
                                                    <div className="card-body text-center">
                                                        <p className="card-text">{el.dessert}</p>

                                                    </div>

                                                </div>
                                            </div>




                                            </div> 
                                            <div style={{display:'flex'}}>
                                            <div className="frontside" style={{marginLeft:'5px'}}>
                                                <div className="card" style={{height:'120px'}}>
                                                    <div className="card-body text-center">
                                                        <p className="card-title"><strong>snack:</strong></p>


                                                    </div>

                                                </div>
                                            </div>
                                            <div className="frontside" style={{marginLeft:'5px'}}>
                                                <div className="card" style={{height:'120px',width:'600px'}}>
                                                    <div className="card-body text-center">
                                                        <p className="card-text"> {el.snack}</p>
 

                                                    </div>

                                                </div>
                                            </div>
                                </div>
                                                           <div className="card" style={{width:'200px'}}><div className= "center_button">
                                                                                    <a href="#" class="btn btn-primary  btn-delete"> <i class="fas fa-trash" > <span onClick={() => { this.delete(el._id) }} >Delete</span></i></a>
                                                                                    <Link class="btn btn-primary" to={`/modifymeal/${el._id}/${el.day}/${el.mainMeal}/${el.dessert}/${el.snack}`}><i class="fas fa-edit"> Edit</i></Link>

                                                            </div></div> 
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
