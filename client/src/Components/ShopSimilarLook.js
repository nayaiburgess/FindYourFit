import React, { Component } from 'react';
import SimilarLook from './SimilarLook';
import axios from 'axios'
import Navbar from './NavBar';

class ShopSimilarLook extends Component {
    state = {
        similarlook : [[]]
      }
    
      async componentDidMount () {
        await this.getSimilarLooks()
        
      }

    getSimilarLooks = () => {
      axios.get('/api/v1/similarlook/').then(res => {
        this.setState({similarlook:res.data});
      })
    }


    render() {
        return (
            <div>
             <Navbar />
                <h1>Similar Looks</h1>
                 <section>
                     {this.state.similarlook.map((similarlook,i) => {
                         return (
                             <SimilarLook key={i} similarlook={similarlook} />
                         )
                     })}
                 </section>   
            </div>
        );
    }
}

export default ShopSimilarLook;