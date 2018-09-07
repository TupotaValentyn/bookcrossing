import React from 'react'
import './header.css'
// import Video from '../../assets/video/Honeymoon.mp4'
// fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAddressCard } from '@fortawesome/free-solid-svg-icons'
//Form
import Form from './../Form/Form'
//Video
import Videvo from '../../assets/video/Videvo.mov'
import { Player, ControlBar } from 'video-react';
//Navigation
import Nav from '../nav/Navigation'

const sources = {
  bunnyMovie: Videvo,
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
          <div className="navigation__icon">
            <h1>
              <FontAwesomeIcon icon={faSearch} className='header__fontAwesome__Search'/>
              <FontAwesomeIcon icon={faAddressCard} className='header__fontAwesome__Card'/>
            </h1>
          </div>
        </div>
      </div>
      <div className='header__player'>
        <Player ref="player" autoPlay muted loop>
          <source src={this.state.source}  />
          <ControlBar autoHide={true} disableCompletely = {false}/>
        </Player>
      </div>
      <div className='header__content__center'>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
      <div className='header__form'>
        <Form />
      </div>

    </header>
    )
  }
}

export default Header;