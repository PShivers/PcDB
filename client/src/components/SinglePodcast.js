import React, {Component} from 'react';
import { Dimmer, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class SinglePodcast extends Component {
  state = {};

  handleShow = () => this.setState({active: true});
  handleHide = () => this.setState({active: false});

  render() {
    const {active} = this.state

    const content = (
      <div >
        <div
          style={{
          fontSize: '1vw',
          color: '#d79922'
        }}>
          {this.props.podcast.description}
        </div>
      </div>
    );
    let linkVar = `/podcasts/${this.props.podcast.id}`
    return (
      <div
        className="ui link cards"
        onClick={()=>this.props.select(this.props.podcast.id)}
        style={{
        margin: '6px'
      }}>
        <Link to={linkVar} className="card" >
          <Dimmer.Dimmable
            as={Image}
            dimmed={active}
            dimmer={{
            active,
            content
          }}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
            size='medium'
            src={this.props.podcast.image}></Dimmer.Dimmable>
          <div
            className="content"
            style={{
            backgroundColor: '#efe2ba'
          }}>
            <div className="header">{this.props.podcast.title}</div>
            <div className="meta">
              from: {this.props.podcast.publisher}
            </div>
          </div>
          <div
            className="extra content"
            style={{
            backgroundColor: '#d79922'
          }}>
            <span className="right floated">
              Available Episodes: {this.props.podcast.total_episodes}
            </span>
            <span>
              <i className="user icon"></i>
              Favorited : 75
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

export default SinglePodcast;