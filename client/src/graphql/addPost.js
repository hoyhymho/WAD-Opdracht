import gql from "graphql-tag";

export default gql `
    mutation addPost($title: String!, $image: String!, $content: String!) {
        addPost(title: $title, image: $image, content: $content) {
            _id
            title
            image
            content
        }
    }
`;