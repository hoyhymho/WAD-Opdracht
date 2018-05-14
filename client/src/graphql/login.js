import gql from "graphql-tag";

export default gql`
  mutation login($email: String!, $password: String!) {
    user: login(email: $email, password: $password) {
      _id
      name
      jwt
    }
  }
`;
