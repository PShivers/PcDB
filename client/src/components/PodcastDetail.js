import React, {Component} from 'react';

class PodcastDetail extends Component {

  render() {
    const podcast = this.props.selectedPodcast;
    return (
      <div >
        <div
          style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img src={podcast.image}/>
        </div>
        <h2>{podcast.title}</h2>
        <br/> {podcast.description}
      </div>
    );
  }
}

export default PodcastDetail;