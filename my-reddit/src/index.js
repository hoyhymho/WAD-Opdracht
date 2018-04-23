import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store/store'

ReactDOM.render(
    <BrowserRouter>
        <Route
            render={({ location }) => <App store={store} location={location} />}
        />
    </BrowserRouter>
    
    , document.getElementById('root')
);
registerServiceWorker();
