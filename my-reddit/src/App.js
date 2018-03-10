import React, { Component } from 'react';
import './App.css';
import Post from './PostFC';
import Input from './Input';
import Form from './Form';

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
          value={title} 
          forwhat="author"
          type="text"
        />
        <Input 
          onChange={value => this.handleChangeValue('content', value)} 
          value={title} 
          forwhat="content"
          type="text"
        />
        <Input 
          onChange={value => this.handleChangeValue('date', value)} 
          value={title} 
          forwhat="date"
          type="date"
        />

        <Form onChange={value => this.handleChangeValue(info, value)} />
      </div>
    );
  }
}

export default App;