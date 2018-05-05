import gql from "graphql-tag";

export default gql `
    query getAllPosts {
        allPosts {
            _id
            title
            content
            image
        }
    }
`;