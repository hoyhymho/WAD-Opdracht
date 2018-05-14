import gql from "graphql-tag";

export default gql`
  mutation addComment($post: String!, $message: String!) {
    addComment(post: $post, message: $message) {
      _id
      message
      created: createdAt
    }
  }
`;
