import React, { Component } from 'react';
import TrendyLook from './TrendyLook';
import SimilarLook from './SimilarLook';
import axios from 'axios'
import Navbar from './NavBar';

class ShopSimilarLook extends Component {
    state = {
        trendylook: [[]]
      }
    
      async componentDidMount () {
        await this.getTrendyLooks()
        await this.getSimilarLooks()
        
      }
    getTrendyLooks = () => {
        axios.get('/api/v1/trendylook/').then(res => {
          this.setState({trendylook: res.data});
        })
      }
      
    getSimilarLooks = () => {
      axios.get('/api/v1/similarlook/').then(res => {
        this.setState({similarlook: res.data});
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