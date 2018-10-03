import React from 'react'
import './header.css'
// fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAddressCard } from '@fortawesome/free-solid-svg-icons'
//Form
//Video
import Videvo from '../../../assets/video/Videvo.mov'
//Navigation
import Nav from '../nav/Navigation'
import PlayeR from '../../molecules/Player/PlayeR'

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
      <PlayeR />
      <div className='header__content__center'>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
      <div className='header__form'>
        {/*<Form />*/}
      </div>

    </header>
    )
  }
}

export default Header;