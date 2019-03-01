import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
            <section className="hero is-success is-fullheight" style= {{ backgroundImage: "url('https://images.unsplash.com/photo-1544261480-9f3c8c9859be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80')", backgroundRepeat: "no-repeat" , backgroundSize: "cover" }}>
            <div className ="hero-body homeContent">
              <div className ="container">
                <h1 className ="homeLogo">
                  Find Your Fit!
                </h1>
                <Link to = "/shoptrendylooks/"> <button className="button is-warning homeButton" > Shop as Guest </button></Link>
              </div>
            </div>
          </section>
        );
    }
}

export default Homepage;