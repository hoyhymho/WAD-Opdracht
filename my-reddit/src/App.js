import React, { Component } from 'react';
import './App.css';
import Post from './PostFC';
import Input from './Input';

class App extends Component {

  constructor(){
    super()
    this.state = {
      title: "title",
      author: "author",
      content: "content",
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
        <Input 
          onChange={value => this.handleChangeValue('title', value)} 
          value={title} 
          forwhat="title"
          type="text"
        />
        <Input 
          onChange={value => this.handleChangeValue('author', value)} 
          value={author} 
          forwhat="author"
          type="text"
        />
        <Input 
          onChange={value => this.handleChangeValue('content', value)} 
          value={content} 
          forwhat="content"
          type="text"
        />
        <Input 
          onChange={value => this.handleChangeValue('date', value)} 
          value={date} 
          forwhat="date"
          type="date"
        />
      </div>
    );
  }
}

export default App;