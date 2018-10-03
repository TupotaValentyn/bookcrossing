import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Footer from './components/organism/Footer/Footer'
import Header from './components/organism/Header/Header'
import notFound from './notFound'
import Home from './components/pages/Home/Home'
import Catalog from './components/pages/Catalog/Catalog'
import Information from './components/pages/Information/Information'
import About from './components/pages/About/About'


class App extends React.Component {
  render() {
    return(
      <div className='wrapper' >
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/catalog" component={Catalog}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/information" component={Information}/>
            <Route component={notFound} />
          </Switch>
        </main>
        <Footer />

         {/*<Login />*/}
      </div>
    );
  }
}

export default App;