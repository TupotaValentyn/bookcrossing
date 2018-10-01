import React, { Component } from 'react';
import './App.css';

// import Header from  './components/header/header'
// import Main from './components/main/main';
// import Footer from './components/footer/footer';


import Intro from './components/pages/intro_page/intro'

class App extends Component {
  render() {
    return (
      <div>

          <Intro />
      </div>
    );
  }
}

export default App;
