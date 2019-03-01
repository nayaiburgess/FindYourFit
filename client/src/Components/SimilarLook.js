import React, { Component } from 'react';

class SimilarLook extends Component {

    render() {
        return (
            <div>
              <img src = {this.props.similarlook.photo_url} />
              <h1> {this.props.similarlook.item_link}</h1>
              <h2> {this.props.similarlook.price} </h2> 
            </div>
        );
    }
}

export default SimilarLook;