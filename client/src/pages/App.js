import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from './Page';

import '../static/css/App.css';

const navLinks = [
  "/contact-us",
  "/"
]

const App = () => {
  return (
    <div>
      <Router>
        <Fragment>
          <Header />
          <div className="app__body">
            <Switch>
              {navLinks.map((link, index) => {
                return (
                  <Route exact path={link} key={index}><Page pageKey={link}/></Route>
                )
              })}
            </Switch>
          </div>
          <Footer />
        </Fragment>  
      </Router>
    </div>
  )
}

export default App;