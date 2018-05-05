import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
//import store from './store/store'

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

ReactDOM.render(
    <ApolloProvider client={client} >
        <BrowserRouter>
            <Route
                render={({ location }) => <App location={location} />} //store={store} 
            />
        </BrowserRouter>
    </ApolloProvider>
    
    , document.getElementById('root')
);
registerServiceWorker();
