import React, { Component } from 'react';
import Shop from './Components/Shop';
import Homepage from './Components/Homepage';
import TrendyLook from './Components/TrendyLook';
import NewUser from './Components/NewUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import User from './Components/User';


class App extends Component {
  render() {
    return (
        <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shoptrendylooks" component={Shop} />
            <Route exact path="/viewtrendylook" component={TrendyLook}/>
            <Route exact path="/users" component={NewUser}/>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
