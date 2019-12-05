import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import BabyList from './components/listBabies'
import BabyAdd from './components/addBaby'
import modifyBaby from './components/modifyBaby'

import './App.css';

var counter = 0;
class App extends Component {
  render() { 
    return ( 
       <Router>
      <div className="app_cont">
      <h1>Our Babies </h1>
    
      <p className="plink">  <Link to="/BabyList"><span>Baby list</span></Link>
      <Link to="/BabyNew"><span>Add Baby</span></Link>
        </p>
 
      </div>
      <Route path="/BabyNew" component={BabyAdd}/>
 
      <Route path="/BabyList" component={BabyList}/>  
 {/* <Route path="/BabyList"    render={(props) => (
  <BabyList key={(++counter).toString()}  a={++counter} {...props} />)   */}

} />
 <Route  path="/modifyBaby/:id/:firstName/:lastName/:birthdate/:sex/:groupName"  component={modifyBaby}/>



      </Router>
    );
  }
}
 
export default App;