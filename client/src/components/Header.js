import React, { Component } from 'react';
import {Header, Menu, Dropdown} from 'semantic-ui-react'

class NavBar extends Component {
  render() {
    return (
      <Menu className = 'inverted'>
        <Dropdown item text='Browse Podcasts' style={{color: '#d79922'}}>
          <Dropdown.Menu style={{color: '#d79922'}}>
            <Dropdown.Header style={{color: '#f13c20'}}>Browse By</Dropdown.Header>
            <Dropdown.Item >Popular</Dropdown.Item>
            <Dropdown.Item>Genre</Dropdown.Item>
            <Dropdown.Item>Newest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item name='Users' style={{color: '#d79922'}}/>
      </Menu>
    )
  }
}

export default NavBar