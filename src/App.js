import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Footer from './organism/Footer/Footer'
import Header from './organism/Header/Header'
import notFound from './notFound'
import Home from './page/Home/Home'
import Catalog from './page/Catalog/Catalog'
import Information from './page/Information/Information'
import About from './page/About/About'

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
      </div>
    );
  }
}

export default App;