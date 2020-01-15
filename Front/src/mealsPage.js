


import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import MealsList from './components/listMeals'
import Addbutton from './addbutton.png'

class MealsPage extends Component {
  render() { 
    return ( 
   
   
      <div>
       
       <MealsList/>
      <Link to="/mealsPage/mealNew"><span><img className='addbutton' src={Addbutton}/> </span></Link>
        
        </div>

 


    );
  }
}
export default MealsPage;

