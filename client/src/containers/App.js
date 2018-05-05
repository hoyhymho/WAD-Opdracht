import React, { Component } from 'react';
import '../css/App.css';
import Posts from '../components/Posts';
import NotFound from '../components/NotFound';
import PostDetail from '../components/PostDetail';
import Form from '../components/Form';
import {Switch, Route, Link} from 'react-router-dom';
import {observer} from "mobx-react";

import { Query } from "react-apollo";
import GET_ALL_POSTS from "../graphql/getAllPosts";

class App extends Component {

  render() {
    const {store} = this.props;

    return (
      <div> 
        <header>
          <Link to="/" className="logo"><h1>myreddit</h1></Link>
        </header>
        
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
                      const post = store.posts.find(check => check.id === id);
                      return (post) ? <PostDetail 
                      store={store} id={id} post={post}
                      /> :<NotFound/>
                    }
                  }
                />

                <Route 
                  path="/add"
                  render={() => <Form posts={allPosts} />}
                />

                <Route component={NotFound} />
              </Switch>
            );
          }}
        </Query>
        
      </div>
    );
  }
}

export default observer(App);