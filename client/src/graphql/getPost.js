import gql from "graphql-tag";

export default gql`
  query getPost($id: String!) {
    post(_id: $id) {
      _id
      title,
      content,
      image
      comments {
        _id
        message
        user {
          name
        }
        created: createdAt
      }
    }
  }
`;
