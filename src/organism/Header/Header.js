import React from 'react'
import './header.css'

import { Player } from 'video-react';
import Nav from '../nav/Navigation'


class Header extends React.Component{
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
      {/*<Player>*/}
        {/*<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />*/}
      {/*</Player>*/}

    </header>
    )
  }
}

export default Header;