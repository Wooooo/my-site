import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/Main';
import Home from './components/HomeComponent';
import Profile from './components/ProfileComponent';
import ProjectList from './components/ProjectListComponent';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

const route = (
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRoute components={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/projects" component={ProjectList} />
        </Route>
    </Router>
);

// Render the main component into the dom
ReactDOM.render(route, document.getElementById('app'));
