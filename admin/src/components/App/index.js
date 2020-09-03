import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import Sidebar from '../Sidebar'
import Page from '../Page';
import './App.css';

class App extends Component {

  state = { 
    pages:[
      {
        icon: HomeIcon,
        title: "HomePage" 
      },
      {
        icon: ImportContactsIcon,
        title: "ContactUs"
      }
    ]};

  render() {
    return (
      <Router>
        <Fragment>
          <div className="app__body">
            <Sidebar pages={this.state.pages}/>
            <Switch>
              <Route path="/admin/page/:pageTitle">
                <Page />
              </Route>
              <Route exact path="/admin">
                <h1>welcome admin</h1>
              </Route>
            </Switch>
          </div>
        </Fragment>  
      </Router>  
    )
  }
} 

export default App;
