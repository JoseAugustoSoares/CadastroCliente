import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import ClientList from './ClientList';
import ClientEdit from "./ClientEdit";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Route path='/' exact component={Home}/>
            <Route path='/clients' exact component={ClientList}/>
            <Route path='/clients/:id' component={ClientEdit}/>
      </BrowserRouter>
    )
  }
}

export default App;