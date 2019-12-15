import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class AssistantList extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      assistants: [],


    })
  }
  componentDidMount() {
    axios.get("http://localhost:3000/assistants")
      .then(res => {
        this.setState({ assistants: res.data })
      })
  }

  delete = (id) => {

    axios.delete("http://localhost:3000/assistant/delete/" + id)

    window.location.reload();

  }



  render() {
    return (

      <div className="container_list">
        {this.state.assistants.map((el, i) => {
          return (
            <div className="elmt" key={i} >

              <p><span>firstName :</span>{el.firstName}</p>
              <p> <span>lastName :</span>{el.lastName}</p>

              <p><span>tel:</span>{el.tel}</p>
              <p><span>email:</span>{el.email}</p>
              <p><span>adress:</span>{el.adress}</p>

              <button ><span onClick={() => { this.delete(el._id) }}>Supprimer</span></button>

              <button ><Link to={`/modifyassistant/${el._id}/${el.firstName}/${el.lastName}/${el.tel}/${el.email}/${el.adress}`}><span>Modifier</span></Link></button>

            </div>
          )
        })}
      </div>




    );
  }
}

export default AssistantList;
