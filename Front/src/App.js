import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AssistantsPage from './assistantsPage';
import ParentsPage from './parentsPage';
import BabiesPage from './babiesListPage';
import GroupsPage from './groupsPage';
import ClubsPage from './clubsPage';
import ClubsPlanning from './clubsPlanning';
import MealsPage from './mealsPage';

import HomePage from './homePage';

import BabyAdd from './components/addBaby';
import modifyBaby from './components/modifyBaby';

import ParentAdd from './components/addParent';
import ParentList from './components/listParents';
import ModifyParent from './components/modifyParent';

import AssistantAdd from './components/addAssistant';
import AssistantList from './components/listAssistants';
import ModifyAssistant from './components/modifyAssistant';

import GroupList from './components/listGroups';
import ModifyGroup from './components/modifyGroup';
import GroupAdd from './components/addGroup';

import ClubsList from './components/listClubs';
import ModifyClub from './components/modifyClub';
import AddClub from './components/addClub';

import ModifyMeal from './components/modifyMeal';
import AddMeal from './components/addMeal';

import EventsList from './components/listEvents';
import EventsPage from './eventsPage';
import AddEvent from './components/addEvent';
import Contact from "./contact"

import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    
    <Router>
      <Route path ={'/'} component ={Header}/>

      <Route exact path ={'/'} component ={HomePage}/>

      <Route path ={'/contact'} component ={Contact}/>
      <Route exact path="/babiesListPage" component ={BabiesPage}/>
      <Route exact path="/babiesListPage/BabyNew/:parentId" component={BabyAdd}/>
      {/* <Route exact path="/babiesListPage/BabyList" component={BabyList}/>  */}
      <Route path="/modifyBaby/:id/:firstName/:lastName/:birthdate/:sex/:groupName"  component={modifyBaby}/>
      
      <Route exact path="/parentsPage" component ={ParentsPage}/>
      <Route exact path="/parentsPage/ParentNew" component={ParentAdd}/>
      {/* <Route exact path="/parentsPage/ParentsList" component={ParentList}/> */}
      <Route path="/modifyparent/:id/:firstName/:lastName/:tel/:email/:adress/:sex"  component={ModifyParent}/>

      <Route exact path="/assistantsPage" component ={AssistantsPage}/>
      <Route exact path="/assistantsPage/AssistantNew" component={AssistantAdd}/>
      <Route exact path="/assistantsPage/AssistantsList" component={AssistantList}/>
      <Route path="/modifyassistant/:id/:firstName/:lastName/:tel/:email/:adress/:groupName"  component={ModifyAssistant}/>

      <Route exact path="/groupsPage" component ={GroupsPage}/>
      <Route exact path="/groupsPage/GroupNew" component={GroupAdd}/>
      <Route exact path="/groupsPage/groupsList" component={GroupList}/>
      <Route path="/modifygroup/:id/:groupName"  component={ModifyGroup}/>

      <Route exact path="/clubsPage" component ={ClubsPage}/>
      <Route exact path="/clubsPage/ClubNew" component={AddClub}/>
      <Route exact path="/clubsPage/clubsList" component={ClubsList}/>
      <Route path="/modifyclub/:id/:name/:description/:day"  component={ModifyClub}/>
      <Route exact path="/clubsPlanning" component={ClubsPlanning}/>

      <Route exact path="/mealsPage" component ={MealsPage}/>
      <Route exact path="/mealsPage/mealNew" component={AddMeal}/>
      <Route path="/modifymeal/:id/:day/:mainMeal/:dessert/:snack"  component={ModifyMeal}/>
      {/* <Route exact path="/clubsPlanning" component={ClubsPlanning}/> */}


      <Route exact path="/eventsPage/:babyId" component ={EventsList}/>
      <Route exact path="/eventsPage/EventNew/:babyId" component={AddEvent}/>
      

      <Route path ={'/'} component ={Footer}/>


    </Router>

  );
}

export default App;
