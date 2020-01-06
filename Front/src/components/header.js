import React from 'react';
import Navb from './nav';
import stork from '../cigue.png'


function Header() {
  return (
    

            
     <div className='logoandnav'>
       <img className='logo' src={stork}/> 
       <div className='logotextcontainer'><p className='logotext'>Baby<br/>Storks</p></div>
     <div className='navcontainer'><Navb/></div>
     </div>




 


  );
}

export default Header;

