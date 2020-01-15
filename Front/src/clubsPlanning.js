import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class ClubsPlanning extends Component {
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







    render() {
        return (


            <section id="team" className="pb-5">
                <div className="container">
                    <h5 className="section-title h1">OUR CLUBS</h5>
                    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        {this.state.clubs.map((el, i) => {

                            return (
                                <div style={{display:'flex'}}>
                                            <div className="frontside" style={{marginLeft:'5px'}}>
                                                <div className="card" style={{height:'200px'}}>
                                                    <div className="card-body text-center">
                                                        <h4 className="card-title"><br/><br/>{el.day}</h4>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="frontside"style={{marginLeft:'5px'}}>
                                                <div className="card" style={{height:'200px',width:'600px'}}>
                                                    <div className="card-body text-center">
                                                        <p className="card-text"><strong> {el.name}</strong></p>
                                                        <p className="card-text">{el.description}</p>
                                                       
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

export default ClubsPlanning;
