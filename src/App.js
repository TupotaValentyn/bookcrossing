import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Test from './components/test/test'
import Container from "./components/buttonBlock/container";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          {/*<header>*/}
              {/*<h1>Lorem ipsum</h1>*/}
          {/*</header>*/}
          {/*<main>*/}
              {/*<div className="content"></div>*/}
          {/*</main>*/}
          {/*<footer>*/}
              {/*<p>*/}
                  {/*Lorem ipsum dolor.*/}
              {/*</p>*/}
          {/*</footer>*/}

          {/*<Test name="Dota 2" age="14+" />*/}
          {/*<Test name="CS GO" age="15+" />*/}
          {/*<Test name="Portal" age="18+" />*/}
          <Container> first </Container>
          <Container> second </Container>
          <Container> three </Container>
      </div>
    );
  }
}

export default App;
