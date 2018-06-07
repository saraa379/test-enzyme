import React, { Component } from 'react';
import Calc from './Calc.js';
import './App.css';

class App extends Component {
  render() {
    return (
       <div className="AppWrap">
	  	      <Calc />
	     </div>
    );
  }
}

export default App;
