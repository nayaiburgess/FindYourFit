import React, { Component } from 'react';
import TrendyLook from './TrendyLook';
import axios from 'axios'
import Navbar from './NavBar';

class Shop extends Component {
    state = {
        trendylook : [[]]
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
        this.setState({similarlook:res.data});
      })
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>Trendy Looks</h1>
                 <section>
                     {this.state.trendylook.map((trendylook,i) => {
                         return (
                             <TrendyLook key={i} trendylook={trendylook} />
                         )
                     })}
                 </section>
            </div>
        );
    }
}

export default Shop;