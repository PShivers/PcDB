import React, { Component } from 'react';
import {Header, Menu, Dropdown} from 'semantic-ui-react'

class NavBar extends Component {
  render() {
    return (
      <Menu>
        <Dropdown item text='Browse Podcasts'>
          <Dropdown.Menu>
            <Dropdown.Header>Browse By</Dropdown.Header>
            <Dropdown.Item>Popular</Dropdown.Item>
            <Dropdown.Item>Genre</Dropdown.Item>
            <Dropdown.Item>Newest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item name='Users'/>
      </Menu>
    )
  }
}

export default NavBar