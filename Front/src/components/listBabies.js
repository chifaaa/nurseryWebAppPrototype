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


      <div className="container_list">
        {this.state.babies.map((el, i) => {
          return (
            <div className="elmt" key={i} >

<img  className="logo_baby"src="https://myrealdomain.com/images/baby-and-stalk-clipart-4.jpg" alt=""/>
              <p><span > <span className="text_form">FirstName: </span >{el.firstName} </span></p>
              <p> <span> <span className="text_form">LastName: </span> {el.lastName}</span></p>

              <p><span> <span className="text_form">Birthdate: </span> {el.birthdate} </span></p>
              <p><span > <span className="text_form">Sex:  </span>{el.sex}</span></p>
              <p><span> <span className="text_form">Group: </span>{el.groupName}</span></p>
              


              <button className="button_list"><span onClick={() => { this.delete(el._id) }}>Supprimer</span></button>


              <button className="button_list"><Link to={`/modifybaby/${el._id}/${el.firstName}/${el.lastName}/${el.birthdate}/${el.sex}/${el.groupName}`}><span>Modifier</span></Link></button>

            </div>
          )
        })}
      </div>





    );
  }
}

export default BabyList;
