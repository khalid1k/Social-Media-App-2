import { gql } from "@apollo/client";
export const GetPostsQuery=gql`
query getPosts {
    getPosts {
        _id
        userId
        title
        content
        createdAt
        updatedAt
        postImage
    }
}
`;

export const GETCOMMETNS=gql`
query getComments{
    getComments{
        _id
        postId
        userId
        comment
        createdAt
        updatedAt
    }
}
`;