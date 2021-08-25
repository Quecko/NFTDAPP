import EventBus from "eventing-bus";
import React, { Component } from 'react';
import store from '../redux/store/index';
import { Provider } from 'react-redux';
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from '../utils/web3React'
import Error from '@material-ui/icons/Error';
import { createBrowserHistory } from "history";
import { ToastContainer, toast } from 'react-toastify';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from './landing';
import Collection from './collection';

import '../static/css/style.scss';

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

  // componentDidMount() {
  //   EventBus.on('tokenExpired', () => this.props.logout());
  //   EventBus.on('error', (e) => toast.error(() => <div> <Error /> {e}</div>));
  //   EventBus.on('success', (e) => toast.success(() => <div> <CheckCircle /> {e}</div>));
  // };

  render() {

    return (
      <div>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Provider store={store}>

            <ToastContainer
              closeOnClick
              position="bottom-left"
            />
            <Router history={hist}>
              <Switch>
                <Route exact path='/' component={props => <Landing {...props} />} />
                <Route exact path='/landing' component={props => <Landing {...props} />} />
                <Route exact path='/collection' component={props => <Collection {...props} />} />
              </Switch>
            </Router>

          </Provider>
        </Web3ReactProvider>
      </div>
    );
  }
}

export default App;