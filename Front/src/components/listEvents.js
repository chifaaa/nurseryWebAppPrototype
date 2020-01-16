import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Addbutton from '../addbutton.png'

class EventsList extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            events: [],

            baby:{}

        })
    }
    // componentDidMount() {
    //     const { match: { params } } = this.props;

    //     axios.get("http://localhost:3000/events")
    //         .then(res => {
    //             const alias=res.data.filter(ev => ev.baby == params.babyId)

    //             this.setState({ events: alias })
    //         })
    // }



    componentDidMount() {

        axios.get("http://localhost:3000/baby/" + this.props.match.params.babyId)
            .then(res => {
                console.log( res.data.events)
                

                this.setState({ baby: res.data, events:res.data.events})
            })
            
    }


    render() {
        return (


            <section id="team" className="pb-5">
                <div className="container">
                    <h4 className="section-title h1">{this.state.baby.firstName}'s Profile</h4>

                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        {this.state.events.map((el, i) => {

                            return (
                                <div>
                                            <div className="frontside"style={{width:'800px'}}>
                                                <div className="card" style={{height:'fit-content',width:'800px'}}>
                                                    <div className="card-body text-center">
                                                    <p className="card-title"> {el.type}</p>
                                                        <p className="card-text"> {el.description}</p>
                                                        {/* {this.state.events.map(event => {
                                              return (<p className="card-text"> {event.description} </p>)
                                              })} */}



                                                    </div>

                                                </div>
                                            </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
                <Link to={`/eventsPage/EventNew/${this.props.match.params.babyId}`}><span><img className='addbutton' src={Addbutton}/> </span></Link>

            </section>





        );
    }
}

export default EventsList;
