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


              <p><span>firstName :</span>{el.firstName}</p>
              <p> <span>lastName :</span>{el.lastName}</p>

              <p><span>birthdate:</span>{el.birthdate}</p>
              <p><span>sex:</span>{el.sex}</p>
              <p><span>group:</span>{el.groupName}</p>


              <button ><span onClick={() => { this.delete(el._id) }}>Supprimer</span></button>


              <button ><Link to={`/modifybaby/${el._id}/${el.firstName}/${el.lastName}/${el.birthdate}/${el.sex}/${el.groupName}`}><span>Modifier</span></Link></button>

            </div>
          )
        })}
      </div>





    );
  }
}

export default BabyList;
