import React from 'react';
import { createBrowserHistory } from "history";
// import { ToastContainer, toast } from 'react-toastify';
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
import useEagerConnect from '../hooks/useEagerConnect'
const hist = createBrowserHistory();
const App=()=>  {
    useEagerConnect();
    return (
      <div>
            {/* <ToastContainer
              closeOnClick
              position="bottom-left"
            /> */}
            <Router history={hist}>
              <Switch>
                <Route exact path='/' component={props => <Landing {...props} />} />
                <Route exact path='/landing' component={props => <Landing {...props} />} />
                <Route exact path='/collection' component={props => <Collection {...props} />} />
              </Switch>
            </Router>
      </div>
    );
}

export default App;