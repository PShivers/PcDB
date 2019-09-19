import React, {Component} from 'react';
// import {getPopularPodcasts} from '../ajax';
import axios from 'axios';
import SinglePodcast from './SinglePodcast';
import PodcastDetail from './PodcastDetail';

const API_KEY = process.env.REACT_APP_LISTEN_API_KEY;

class PopularPodcasts extends Component {
  state = {
    detail:false,
    podcasts: []
  }



  componentDidMount() {
    //  getPopularPodcasts().then(res=>{      this.setState({podcasts:res.data})  })
    axios
      .get('https://listen-api.listennotes.com/api/v2/best_podcasts?page=2&region=us&safe_mo' +
        'de=1', {
      headers: {
        'X-ListenAPI-Key': API_KEY
      }
    })
      .then(res => {
        this.setState({podcasts: res.data.podcasts})
      })
  }

  

  render() {
    console.log(this.state)
    if(!this.props.detail) {
      return (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor: "#1a1a1d"
        }}>
          {this
            .state
            .podcasts
            .map(podcast => {
              return <SinglePodcast
                
                podcast={podcast} toggle={this.props.toggle}/>
            })}
        </div>
  
      );
    } else {
      return <PodcastDetail />
    }
    // console.log(this.state)
    
  }
}

export default PopularPodcasts;