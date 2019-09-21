import React, {Component} from 'react';
import SinglePodcast from './SinglePodcast';

class PopularPodcasts extends Component {
   
  
  render() {
    console.log(this.props)
    return (
      <div
        style={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: "#1a1a1d"
      }}>
        {this
          .props
          .podcasts
          .map(podcast => {
            return <SinglePodcast key={podcast.id} podcast={podcast} select={this.props.select}/>
          })}
      </div>

    );
  }
}

export default PopularPodcasts;