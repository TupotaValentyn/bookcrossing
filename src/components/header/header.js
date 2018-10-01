import './header.css';

import React from 'react';
import Search from './search/search';
import Nav from './nav/nav';
import Logo from './logo/Logo';


export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Search />
                <Nav />
                <Logo />
            </header>
        );
    }
};
