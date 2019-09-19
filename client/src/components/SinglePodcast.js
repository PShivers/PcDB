import React, {Component} from 'react';
import {Button, Dimmer, Header, Image} from 'semantic-ui-react'

class SinglePodcast extends Component {
  state = {}

  handleShow = () => this.setState({active: true})
  handleHide = () => this.setState({active: false})
  render() {
    const {active} = this.state

    const content = (
      <div >
        <div
          inverted
          style={{
          fontSize: '1vw',
          color: '#d79922'
        }}>
          {this.props.podcast.description}
        </div>
      </div>
    )

    
    return (
      <div
        class="ui link cards"
        style={{
        margin: '6px'
      }}
        onClick={this.props.toggle}
        key={this.props.podcast.id}>
        <div class="card">
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
            class="content"
            style={{
            backgroundColor: '#efe2ba'
          }}>
            <div class="header">{this.props.podcast.title}</div>
            <div class="meta">
              from: {this.props.podcast.publisher}
            </div>
          </div>
          <div
            class="extra content"
            style={{
            backgroundColor: '#d79922'
          }}>
            <span class="right floated">
              Available Episodes: {this.props.podcast.total_episodes}
            </span>
            <span>
              <i class="user icon"></i>
              Favorited : 75
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePodcast;