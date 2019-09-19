import React, {Component} from 'react';
import PopularPodcasts from './PopularPodcasts';
import Header from './Header';
import PodcastDetail from './PodcastDetail';

class App extends Component {
  state = {
    detail: false
  }
  toggle = () => {
    console.log("clicked")
    this.setState({detail: !this.state.detail}) 
  }
  render() {

    return (
      <div style={{backgroundColor: '#efe2ba'}}>
        <Header />
        <PopularPodcasts toggle={this.toggle} detail={this.state.detail}/>
        
      </div>

    );
  }
}

export default App;