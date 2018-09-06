import React from 'react'
import './header.css'
import Video from '../../assets/video/Honeymoon.mp4'

import { Player, ControlBar } from 'video-react';
import Nav from '../nav/Navigation'

const sources = {
  bunnyMovie: Video,
};



class Header extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      source: sources['bunnyMovie'],
    };
  }

  render(){
    return (
    <header>
      <div className='header__navigation__top'>
        <div className="navigation__logo__left">
              <h3>Bookcrossing</h3>
        </div>
        <Nav />
        <div className='navigation__search__right' >
          <input type="text" id='search' />
        </div>
      </div>
      <div className='header__player'>
        <Player ref="player" autoPlay muted loop>
          <source src={this.state.source}  />
          <ControlBar autoHide={true} disableCompletely = {false}/>
        </Player>
      </div>

    </header>
    )
  }
}

export default Header;