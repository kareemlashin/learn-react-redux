import React from 'react';
import {
  Link 
} from "react-router-dom";

class Nav extends React.Component { 
constructor() {
  super();
  
}
state={
  users : [],
  data:[1,2,3,4,5,6,7,8],
  dats:true
}
componentDidMount=()=> {

  
}


  render () {
    return (
      <div className="NavWrapper">
      nav nav
      
        {this.state.dats?(<div>true</div>):(<div>false</div>)}
      </div>
    );
  }
}


export default Nav;
