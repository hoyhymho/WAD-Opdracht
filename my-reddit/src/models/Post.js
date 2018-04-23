import uniqid from "uniqid";
import {observable, decorate} from "mobx";

class Post {
  constructor(title, content, date, author,image) {
    this.id = uniqid();
    this.title = title;
    this.content = content;
    this.date = date;
    this.author = author;
    this.image = image
  }

  updateTitle = value => {
    this.title = value;
  };

  updateAuthor = value => {
    this.author = value;
  };

  updateContent = value => {
    this.content = value;
  };

}

decorate(Post, {
  title: observable, 
  content: observable, 
  date: observable, 
  author: observable, 
  image: observable, 
})

export default Post;
