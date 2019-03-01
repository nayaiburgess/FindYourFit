import React, { Component } from 'react';

class TrendyLook extends Component {
    render() {
        return (
            <div>
              <img src = {this.props.trendylook.photo_url} />
              <h1> {this.props.trendylook.celeb_name}</h1>
              <h2> {this.props.trendylook.description} </h2> 
            </div>
        );
    }
}

export default TrendyLook;