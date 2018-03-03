import React, { Component } from 'react';
import './App.css';
import Post from './Post';

class App extends Component {

  render() {
    return (
      <div> 
        <Post title="titeltest" time="5" author="john" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error praesentium provident minus similique quasi ex vel voluptatem quia laudantium voluptate et, itaque beatae cum. Delectus sapiente assumenda corporis expedita quam."/>
        <Post title="post2test" time="5" author="dds" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error praesentium provident minus similique quasi ex vel voluptatem quia laudantium voluptate et, itaque beatae cum. Delectus sapiente assumenda corporis expedita quam."/>
      </div>
    );
  }
}

export default App;