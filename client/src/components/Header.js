import React, { Component } from 'react';
import SearchInput from './SearchInput';
import {Menu, Dropdown, Search} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render() { 

    const popLink = '/podcasts'
    // const genreLink = '/podcasts'
    // const newestLink = '/podcasts'

    return (
      <Menu className = 'inverted' >
        <Dropdown item text='Browse Podcasts' style={{color: '#d79922'}}>
          <Dropdown.Menu style={{color: '#d79922'}}>
            <Dropdown.Header style={{color: '#f13c20'}}>Browse By</Dropdown.Header>
            <Dropdown.Item >Popular</Dropdown.Item>
            <Dropdown.Item>Genre</Dropdown.Item>
            <Dropdown.Item>Newest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item name='Users' style={{color: '#d79922'}}/>
        <SearchInput className="float right" />
        <Menu.Item name='Login' style={{color: '#d79922'}}/>
      </Menu>
    )
  }
}

export default NavBar