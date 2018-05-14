import React, { Component } from 'react';
import '../css/App.css';
import Posts from '../components/Posts';
import NotFound from '../components/NotFound';
import PostDetail from '../components/PostDetail';
import Form from '../components/Form';
import User from "../components/User";
import {Switch, Route, Link} from 'react-router-dom';
import {observer} from "mobx-react";

import { Query } from "react-apollo";
import GET_ALL_POSTS from "../graphql/getAllPosts";
import ProtectedRoute from "../components/ProtectedRoute";

class App extends Component {

  render() {
    const {store} = this.props;

    return (
      <div> 
        <header>
          <Link to="/" className="logo"><h1>myreddit</h1></Link>
        </header>
        
        <div className="allContainer">
          <Query query={GET_ALL_POSTS}>
            {({ loading, error, data: {allPosts} }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>error {error.message}</p>;
              return (
                <Switch>
                  <Route path="/" exact render={() => 
                    <Posts posts={allPosts} />
                  }/>

                  <Route
                    path="/post/:id"
                    render={
                      ({match}) => {
                        const id = match.params.id;
                        return <PostDetail key={id} id={id} />
                      }
                    }
                  />

                  <Route 
                    path="/add"
                    render={() => <Form posts={allPosts} />}
                  />

                  <ProtectedRoute path="/add" component={Form} />

                  <Route component={NotFound} />
                </Switch>
              );
            }}
          </Query>
          
          <User />
        </div>
      </div>
    );
  }
}

export default observer(App);