import EventBus from "eventing-bus";
import React, { Component } from 'react';
import Error from '@material-ui/icons/Error';
import { createBrowserHistory } from "history";
import { ToastContainer, toast } from 'react-toastify';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from './landing';
import '../static/css/style.css';


import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css';

const hist = createBrowserHistory();
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  };

  componentDidMount() {
    EventBus.on('tokenExpired', () => this.props.logout());
    EventBus.on('error', (e) => toast.error(() => <div> <Error /> {e}</div>));
    EventBus.on('success', (e) => toast.success(() => <div> <CheckCircle /> {e}</div>));
  };

  render() {

    return (
      <div>
        
        <ToastContainer
          closeOnClick
          position="bottom-left"
        />
        <Router history={hist}>
          <Switch>
            <Route exact path='/' component={props => <Landing {...props} />} />
            <Route exact path='/landing' component={props => <Landing {...props} />} />
          </Switch>
        </Router>
      
      </div>
    );
  }
}

export default App;