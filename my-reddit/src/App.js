import React, { Component } from 'react';
import './App.css';
import Post from './PostFC';

class App extends Component {

  constructor(){
    super()
    this.state = {
      posts: {}
    }
  }

  handleChangeValue = (info, value) => {
    console.log("log vanuit de App.jsx:" , info, value)
    this.setState({[info]:value});
  }

  handleAddPost = (title, content) => {
    const posts = { ...this.state.posts };
    const date = new Date().toISOString().slice(0,10);
    const id = Date.now();
    posts[id] = {key: id,  title: title, content: content, author: "author", date: date};
    this.setState({ posts });
  }

  handleDeletePost = id => {
    const posts = { ...this.state.posts };
    delete posts[id];
    this.setState({ posts });
  }

  handleChangeInput = (id, post) => {
    const {posts} = this.state;
    const updatedPosts = {...posts};
    updatedPosts[id] = post;
    this.setState({posts:updatedPosts});
  }

  render() {
    const { posts} = this.state;

    return (
      <div> 
        <header>
          <h1>myreddit</h1>
        </header>
        
        <Post 
          posts={posts} 
          onAddPost={this.handleAddPost} 
          onChange={this.handleChangeInput}
          onDeletePost={this.handleDeletePost}
        />
        
      </div>
    );
  }
}

export default App;