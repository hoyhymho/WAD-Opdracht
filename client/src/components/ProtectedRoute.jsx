import React from "react";

import { Route, Redirect } from "react-router-dom";

import GET_CURRENT_USER from "../graphql/getCurrentUser";
import { Query } from "react-apollo";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Query query={GET_CURRENT_USER}>
        {({ loading, error, data, client }) => {
          if (loading) return null;
          if (error) return null;
          return data.currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          );
        }}
      </Query>
    )}
  />
);

export default ProtectedRoute;
