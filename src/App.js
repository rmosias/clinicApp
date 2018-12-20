import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

// Componentes
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import ListPacients from './components/pacient/ListPacients'
import SingIn from './components/auth/SingIn'
import SingUp from './components/auth/SingUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/pacient' component={ListPacients} />
            <Route path='/signin' component={SingIn} />
            <Route path='/signup' component={SingUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
