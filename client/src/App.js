import React, { Component } from 'react';
import Shop from './Components/Shop';
import Homepage from './Components/Homepage';
import TrendyLook from './Components/TrendyLook';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
        <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shoptrendylooks" component={Shop} />
            <Route exact path="/viewtrendylook" component={TrendyLook}/>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
