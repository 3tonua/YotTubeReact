import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OneVideo from './OneVideo';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import VideosList from './app/videosList';
import Open from './app/Open';
import Modal from './app/Modal';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={VideosList} />
                <Route path="open/:id" component={Open} />
                <Route path="/" component={Modal} />
            </Route>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('app')
);