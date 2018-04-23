import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';
import NotFound from './NotFound';
import PostDetail from './PostDetail';
import Form from './Form';
import {Switch, Route, Link} from 'react-router-dom';
import {observer} from "mobx-react";

class App extends Component {

  render() {
    const {store} = this.props;

    return (
      <div> 
        <header>
          <Link to="/" className="logo"><h1>myreddit</h1></Link>
        </header>
        
        <Switch>
          <Route path="/" exact render={() => 
            <Posts store={store} />
          }/>

          <Route
            path="/post/:id"
            render={
              ({match}) => {
                const id = match.params.id;
                const post = store.posts.find(check => check.id === id);
                console.log(post);
                return (post) ? <PostDetail 
                store={store} id={id} post={post}
                /> :<NotFound/>
              }
            }
          />

          <Route 
            path="/add"
            render={() => <Form store={store} />}
          />

          <Route component={NotFound} />
        </Switch>
        
        
      </div>
    );
  }
}

export default observer(App);