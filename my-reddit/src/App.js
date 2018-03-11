import React, { Component } from 'react';
import './App.css';
import Post from './PostFC';
import Form from './Form';

class App extends Component {

  constructor(){
    super()
    this.state = {
      title: "Title Placeholder",
      author: "author",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin leo risus. Aenean lobortis lectus a varius maximus. Donec ac ultrices mi. Nulla sodales dictum sodales. Vivamus nec auctor dolor. Sed iaculis sodales augue, at viverra velit hendrerit vel. Aliquam pharetra ut turpis quis convallis. Vestibulum at arcu pharetra lectus rhoncus fermentum. In dictum maximus ligula. Duis ac neque consequat, facilisis sem ac, bibendum magna. Aenean ac dapibus nulla. Donec commodo iaculis vehicula. Pellentesque vel porta nisl. ",
      date: "net"
    }
  }

  handleChangeValue = (info, value) => {
    console.log("log vanuit de App.jsx:" , info, value)
    this.setState({[info]:value});
  }

  render() {
    const {title, author, content, date} = this.state;

    return (
      <div> 
        <Post title={title} author={author} content={content} date={date}/>
        <Form onChange={(name, value) => this.handleChangeValue(name, value)} />
      </div>
    );
  }
}

export default App;