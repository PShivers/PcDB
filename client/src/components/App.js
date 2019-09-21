import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';
//components
import Header from './Header';
import PopularPodcasts from './PopularPodcasts';
import PodcastDetail from './PodcastDetail';
import LoginPage from './LoginPage'
//Environment variables
const API_KEY = process.env.REACT_APP_LISTEN_API_KEY;

class App extends Component {
  state = {
    podcasts: [],
    selectedPodcast: {}
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

  select = (id) => {
    axios
      .get(`https://listen-api.listennotes.com/api/v2/podcasts/${id}?next_episode_pub_date=1479154463000&sort=recent_first`, {
      headers: {
        'X-ListenAPI-Key': API_KEY
      }
    })
      .then(res => {
        this.setState({selectedPodcast: res.data})
        console.log(this.state)
      })
  }

  render() {
    const PopularPodcastsC =()=> ( <PopularPodcasts podcasts={this.state.podcasts} select={this.select} />);
    const PodcastDetailC = () => (<PodcastDetail selectedPodcast={this.state.selectedPodcast} /> )
    return (
      <div
        style={{
        backgroundColor: 'cream',
        display: "flex",
        justifyContent: "center"
      }}>
        <div
          style={{
          width: '75%',
          boxShadow: "0px 0px 10px rgba(0,0,0,0.7)"
        }}>
          <Router>
          <Header/>
            <Route exact path='/podcasts' component={PopularPodcastsC}/>
            <Route exact path="/podcasts/:id" component={PodcastDetailC}/>
            <Route exact path="/login" component={LoginPage} />
          </Router>
        </div>

      </div>

    );
  }
}

export default App;