const Post = require("../models/post.model");

exports.create = (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({
      message: "Post content can not be empty"
    });
  }

  const post = new Post({
    content: req.body.content,
    likes: req.body.likes || 0
  });

  post
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error"
      });
    });
};

exports.findAll = (req, res) => {
  Post.find()
    .then(posts => {
      res.send(posts);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error"
      });
    });
};

exports.findOne = (req, res) => {
  Post.findById(req.params.postId)
    .then(post => {
      if (!post) {
        return res.status(404).send({
          message: "Post not found with id " + req.params.postId
        });
      }
      res.send(post);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Post not found with id " + req.params.postId
        });
      }
      return res.status(500).send({
        message: "Error retrieving post with id " + req.params.postId
      });
    });
};

exports.update = (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({
      message: "Post content can not be empty"
    });
  }

  Post.findByIdAndUpdate(
    req.params.postId,
    {
      content: req.body.content,
      likes: req.body.likes || 0
    },
    { new: true }
  )
    .then(post => {
      if (!post) {
        return res.status(404).send({
          message: "Post not found with id " + req.params.postId
        });
      }
      res.send(post);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Post not found with id " + req.params.postId
        });
      }
      return res.status(500).send({
        message: "Error updating post with id " + req.params.postId
      });
    });
};

exports.delete = (req, res) => {
  Post.findByIdAndRemove(req.params.postId)
    .then(post => {
      if (!post) {
        return res.status(404).send({
          message: "Post not found with id " + req.params.postId
        });
      }
      res.send({ message: "Post deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Post not found with id " + req.params.postId
        });
      }
      return res.status(500).send({
        message: "Could not delete post with id " + req.params.postId
      });
    });
};
