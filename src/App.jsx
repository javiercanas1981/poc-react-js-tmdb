import React, { Component } from 'react';
import './components/styles/react_eddf.css';
import { hashHistory, browserHistory, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { browserHistory, IndexRoute } from 'react-router';

import HomePage from './components/HomePage';
import Details from './components/Details';
import MovieContainer from "./components/MovieContainer";
import { Provider } from 'react-redux';

import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import storeApp from './reducers';


const routeMiddleware = routerMiddleware(browserHistory);
let store = createStore(storeApp, composeWithDevTools(
    applyMiddleware(thunkMiddleware, routeMiddleware)));
const history = syncHistoryWithStore(browserHistory,store);

class App extends Component {
    state = {
        searchUrl:  ""
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history} >
                    <Router>
                        <div className='content_div'>
                            <Route exact path='/' render={(props) => <HomePage {...props}/>} />
                            <Route path='/details/:movie' component={Details} />
                            <Route exact path='/search/:keyword' render={(props) => <MovieContainer {...props}/>} />
                        </div>
                    </Router>
                </Router>
            </Provider>
        );
    }
}

export default React.memo(App);
