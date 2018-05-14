import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
//import store from './store/store'

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { defaults, resolvers } from "./resolvers.js";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",

    clientState: {
        defaults,
        resolvers
      },
      request: async operation => {
        const token = localStorage.getItem("jwt");
        operation.setContext({
          headers: {
            authorization: token ? `Bearer ${token}` : ""
          }
        });
      }
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
