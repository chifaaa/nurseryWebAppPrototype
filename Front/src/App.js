import React from 'react';
import Navb from './components/nav';
import Car from './components/carousel';
import './App.css';
import { Features } from './components/features';
import stork from './cigue.png'
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import Inscription from './inscription';
import BabyAdd from './components/addBaby'
import BabyList from './components/listBabies'
import modifyBaby from './components/modifyBaby'
import ParentAdd from './components/addParent'
import ParentList from './components/listParents'
import ModifyParent from './components/modifyParent'
import AssistantAdd from './components/addAssistant'
import AssistantList from './components/listAssistants'
import ModifyAssistant from './components/modifyAssistant'
import GroupAdd from './components/addGroup'
import GroupsList from './components/listGroups'
import ModifyGroup from './components/modifyGroup'

function App() {
  return (
    
    <Router>
       
         <Route exact path ={'/'} render ={()=> 
         <div>
            <div className="App">
     <div className='logoandnav'>
       <img className='logo' src={stork}/> 
       <div className='logotextcontainer'><p className='logotext'>Baby<br/>Storks</p></div>
       
       
     <div className='navcontainer'><Navb/></div>
     </div>
     <Car/>
     {/* <div className="diva" style={{backgroundColor:'black'}}>here</div> */}
     <Features/>
     <footer>
    <p>
        Follow Us On: 
        
        <span className="country-link">Facebook</span>, 
        <span className="country-link">YouTube</span>, 
        <span className="country-link">Instagram</span> and 
        <span className="country-link">Twitter</span> <br/><br/>
        This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the
        conditions for storing or accessing cookies on your browser.<br/>
        www.babystorks.com © 2019
    </p>
    </footer> 

  </div>
         </div>

         }/>
      
      <Route path="/inscription" component ={Inscription}/>
      <Route path="/inscription/BabyNew/:parentId" component={BabyAdd}/>
      <Route path="/inscription/BabyList" component={BabyList}/> 
      <Route  path="/modifyBaby/:id/:firstName/:lastName/:birthdate/:sex/:groupName"  component={modifyBaby}/>
 
      <Route path="/inscription/ParentNew" component={ParentAdd}/>
      <Route path="/inscription/ParentsList" component={ParentList}/>
      <Route  path="/modifyparent/:id/:firstName/:lastName/:tel/:email/:adress"  component={ModifyParent}/>

      <Route path="/inscription/AssistantNew" component={AssistantAdd}/>
      <Route path="/inscription/AssistantsList" component={AssistantList}/>
      <Route  path="/modifyassistant/:id/:firstName/:lastName/:tel/:email/:adress"  component={ModifyAssistant}/>

      <Route path="/inscription/GroupNew" component={GroupAdd}/>
      <Route path="/inscription/GroupsList" component={GroupsList}/>
      <Route  path="/modifyGroup/:id/:groupName"  component={ModifyGroup}/>
    </Router>

  );
}

export default App;
