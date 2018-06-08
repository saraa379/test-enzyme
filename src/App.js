import React, { Component } from 'react';
import Calc from './Calc.js';
import EditableList from './EditableList.js';
import './App.css';

class App extends Component {
  render() {
    return (
       <div className="AppWrap">
	  	      <Calc />
            <EditableList />
	     </div>
    );
  }
}

export default App;
