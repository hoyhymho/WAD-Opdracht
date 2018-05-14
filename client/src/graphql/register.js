import gql from "graphql-tag";

export default gql`
  mutation register($email: String!, $password: String!, $name: String!) {
    user: register(email: $email, password: $password, name: $name) {
      _id
      email
    }
  }
`;
