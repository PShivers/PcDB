import React, {Component} from 'react';
import PopularPodcasts from './PopularPodcasts';
import Header from './Header';
import Podcast from './Podcast';

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Header />
        <PopularPodcasts/>
        <Podcast />
      </div>

    );
  }
}

export default App;