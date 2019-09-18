import React, { Component } from 'react';
import{getPopularPodcasts} from '../ajax'

 class PopularPodcasts extends Component {
     state = { podcasts:[] }

     componentDidMount(){
         getPopularPodcasts().then(res=>{
             this.setState({podcasts:res.data})
         })
     }


     render() { 
         return ( <div>podcasts</div> );
     }
 }
  
 export default PopularPodcasts;