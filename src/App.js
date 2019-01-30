import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Naves from './Components/paginas/Naves';
import Planets from './Components/paginas/Planets';
import Characters from './Components/paginas/Characters';
import Films from './Components/paginas/Films';
import Vehicles from './Components/paginas/Vehicles';
import Home from './Components/paginas/Home';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      <Route path="/Naves" component={Naves}/>
      <Route path="/Planets" component={Planets}/>
      <Route path="/Characters" component={Characters}/>
      <Route path="/Films" component={Films}/>
      <Route path="/Vehicles" component={Vehicles}/>
      <Route path="/Home" component={Home}/>



      </div>
    );
  }
}

export default App;
